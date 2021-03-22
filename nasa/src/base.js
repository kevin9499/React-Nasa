import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxUKPF4-KDBfgLtt6XXzoF53WAsyWiYZw",
  authDomain: "nasa-92619.firebaseapp.com",
  databaseURL: "https://nasa-92619-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
