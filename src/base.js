
import Rebase from 're-base'
import firebase from 'firebase'
  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDqiM-3QQwXOHv9C5IIi_6stOv9x-qQc08",
    authDomain: "bora-ajudar-572b9.firebaseapp.com",
    databaseURL: "https://bora-ajudar-572b9.firebaseio.com",
    projectId: "bora-ajudar-572b9",
    storageBucket: "",
    messagingSenderId: "388217771357"
  };
  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const auth = firebase.auth()

  export default base
