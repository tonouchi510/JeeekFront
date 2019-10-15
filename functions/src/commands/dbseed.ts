import commander from 'commander'
import admin from 'firebase-admin'
import csv2json from 'csvtojson'

import { Feed, Category } from '../../../src/services/models/feeds'
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
    case collectionName.feeds: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_feeds.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Feed) => ({
            ...record,
            updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          }))
        })
      for await (const doc of docs) {
        // null itemの削除
        doc.tags = doc.tags.filter(elem => elem)
        doc.favorites = doc.favorites.filter(elem => elem.uid !== '')

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
    case collectionName.categories: {
      const docs = await csv2json()
        .fromFile('seeds/jeeek_dev_categories.csv')
        .then(jsonObj => {
          return jsonObj.map((record: Category) => ({
            ...record,
          }))
        })
      for await (const doc of docs) {
        const { version } = doc
        const docWithoutId = { ...doc }
        delete docWithoutId.version
        if (version != null) {
          await ref.doc(version).set(docWithoutId)
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
