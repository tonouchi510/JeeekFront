import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB62WBiA_JWszHIRl7FrGFwK947_TwL0xo',
  authDomain: 'jeeek-250713.firebaseapp.com',
  databaseURL: 'https://jeeek-250713.firebaseio.com',
  projectId: 'jeeek-250713',
  storageBucket: 'jeeek-250713.appspot.com',
  messagingSenderId: '440603496070',
  appId: '1:440603496070:web:c5eb1c05ce7e278a',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
