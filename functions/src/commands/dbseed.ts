import commander from 'commander'
import admin from 'firebase-admin'
import csv2json from 'csvtojson'

import serviceAccount from '../../../firebase-service-key-dev.json'
import { collectionName } from '../../../src/services/constants'
import { Activity } from '../../../src/services/models/activity'
import { FirebaseUser } from '../../../src/services/models/firebaseUser'
import { User } from '../../../src/services/models/user'
import { Career } from '../../../src/services/models/career'
import { SkillStacks } from '../../../src/services/models/skillStacks'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})
const db = admin.firestore()

const uploadSeed = async (collection: string) => {
  const ref = db.collection(collection)
  switch (collection) {
    case collectionName.firebaseUsers: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_firebase_users.csv')
        .then(jsonObj => {
          return jsonObj.map((record: FirebaseUser) => ({
            ...record,
            emailVerified: record.emailVerified.toString().toLowerCase() === 'true',
            disabled: record.disabled.toString().toLowerCase() === 'true',
          }))
        })
      for await (const doc of docs) {
        admin.auth().createUser({
          uid: doc.uid,
          email: doc.email,
          emailVerified: doc.emailVerified,
          password: doc.password,
          displayName: doc.displayName,
          disabled: doc.disabled,
        })
      }

      return
    }
    case collectionName.users: {
      const userDocs = await csv2json({ nullObject: false })
        .fromFile('seeds/jeeek_dev_users.csv')
        .then(jsonObj => {
          return jsonObj.map((record: User) => ({
            ...record,
          }))
        })

      const activityDocs = await csv2json()
        .fromFile('seeds/jeeek_dev_activities.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Activity) => ({
            ...record,
            category: Number(record.category),
            rank: Number(record.rank),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          }))
        })

      for await (const userDoc of userDocs) {
        // null itemの削除
        userDoc.followers = userDoc.followers.filter(elem => elem.uid !== '')
        userDoc.followings = userDoc.followings.filter(elem => elem.uid !== '')
        const { uid } = userDoc.userTiny
        if (uid != null) {
          await ref.doc(uid).set(userDoc)
        }

        const followUserUIDs = userDoc.followings.map(elem => elem.uid)
        followUserUIDs.push(uid)
        const followUserActivities = activityDocs.filter(
          elem => followUserUIDs.indexOf(elem.userTiny.uid) >= 0,
        )
        for await (const doc of followUserActivities) {
          // null itemの削除
          doc.tags = doc.tags.filter(elem => elem)
          doc.favorites = doc.favorites.filter(elem => elem)
          doc.gifts = doc.gifts.filter(elem => elem)
          const { id } = doc
          const docWithoutId = { ...doc }
          delete docWithoutId.id
          if (id != null) {
            await ref
              .doc(uid)
              .collection('timeline')
              .doc(id)
              .set(docWithoutId)
          }
        }
      }

      return
    }
    case collectionName.careers: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_careers.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Career) => ({
            ...record,
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        doc.education = doc.education.filter(elem => elem.period !== '')
        doc.workExperience = doc.workExperience.filter(elem => elem.period !== '')
        doc.certification = doc.certification.filter(elem => elem.period !== '')

        const { uid } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.uid
        if (uid != null) {
          await ref.doc(uid).set(docWithoutId)
        }
      }

      return
    }
    case collectionName.skillStacks: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_skills.csv')
        .then(jsonObj => {
          return jsonObj.map((record: SkillStacks) => ({
            ...record,
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        doc.skills = doc.skills.filter(elem => elem.tag !== '')
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < doc.skills.length; i++) {
          doc.skills[i].point = Number(doc.skills[i].point)
        }

        const { uid } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.uid
        if (uid != null) {
          await ref.doc(uid).set(docWithoutId)
        }

        const ref2 = db.collection('skillTags')
        if (!doc.skills) continue
        for await (const skill of doc.skills) {
          // skill_tagの存在確認
          const tag = await ref2.doc(skill.tag).get()
          if (tag.exists) {
            await ref2
              .doc(skill.tag)
              .collection('skillHolders')
              .doc(uid)
              .update({ point: skill.point })
          } else {
            ref2
              .doc(skill.tag)
              .collection('skillHolders')
              .doc(uid)
              .set({ point: skill.point })
          }
        }
      }

      return
    }
    default: {
      throw new Error('specify target collection')
    }
  }
}
commander
  .version('0.1.0', '-v, --version')
  .arguments('<collection>')
  .action(uploadSeed)
commander.parse(process.argv)
