import commander from 'commander'
import admin from 'firebase-admin'
import csv2json from 'csvtojson'

import { Activity } from '../../../src/services/models/activities'
import { User, UserProfile, Follows } from '../../../src/services/models/users'
import { collectionName } from '../../../src/services/constants'
import serviceAccount from '../../../firebase-service-key-dev.json'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
})
const db = admin.firestore()

const uploadSeed = async (collection: string) => {
  const ref = db.collection(collection)
  switch (collection) {
    case collectionName.users: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_users.csv')
        .then(jsonObj => {
          return jsonObj.map((record: User) => ({
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
        const ref2 = db.collection('userProfiles')
        const profile: UserProfile = {
          version: 0.1,
          postCounter: 0,
        }
        ref2.doc(doc.uid).set(profile)
      }

      return
    }
    case collectionName.follows: {
      const docs = await csv2json({ nullObject: false })
        .fromFile('seeds/jeeek_dev_follows.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Follows) => ({
            ...record,
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        doc.followers = doc.followers.filter(elem => elem.uid !== '')
        doc.followings = doc.followings.filter(elem => elem.uid !== '')

        const { uid } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.uid
        if (uid != null) {
          await ref.doc(uid).set(docWithoutId)
        }
      }

      return
    }
    case collectionName.activities: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_activities.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Activity) => ({
            ...record,
            category: Number(record.category),
            rank: Number(record.rank),
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        doc.tags = doc.tags.filter(elem => elem)
        doc.favorites = doc.favorites.filter(elem => elem.uid !== '')
        if (doc.favorites) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < doc.favorites.length; i++) {
            doc.favorites[i].eval = Number(doc.favorites[i].eval)
          }
        }
        const { id } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.id
        if (id != null) {
          await ref.doc(id).set(docWithoutId)
          const userRef = db.collection('userProfiles').doc(doc.user.uid)
          await userRef.update('postCounter', admin.firestore.FieldValue.increment(1))
        }
      }

      return
    }
    case collectionName.userProfiles: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_user_profiles.csv')
        .then(jsonObj => {
          return jsonObj.map((record: UserProfile) => ({
            ...record,
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        if (doc.career) {
          doc.career.education = doc.career.education.filter(elem => elem.period !== '')
          doc.career.workExperience = doc.career.workExperience.filter(elem => elem.period !== '')
          doc.career.certification = doc.career.certification.filter(elem => elem.period !== '')
        }
        if (doc.skills) {
          doc.skills = doc.skills.filter(elem => elem.tag !== '')
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < doc.skills.length; i++) {
            doc.skills[i].point = Number(doc.skills[i].point)
          }
        }

        const { uid } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.uid
        if (uid != null) {
          await ref.doc(uid).set(docWithoutId)
        }

        const ref2 = db.collection('skills')
        if (!doc.skills) continue
        for await (const skill of doc.skills) {
          skill.point = Number(skill.point)
          // skill_tagの存在確認
          const tag = await ref2.doc(skill.tag).get()
          if (tag.exists) {
            await ref2.doc(skill.tag).update({
              users: admin.firestore.FieldValue.arrayUnion({
                uid,
                point: skill.point,
              }),
            })
          } else {
            ref2.doc(skill.tag).set({
              users: [{ uid, point: skill.point }],
            })
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
