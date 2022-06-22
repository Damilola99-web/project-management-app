import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAWTJGD3eqJVqeuvMYmdfr9TN2qxJ1U_Ek",
    authDomain: "management-site-12e71.firebaseapp.com",
    projectId: "management-site-12e71",
    storageBucket: "management-site-12e71.appspot.com",
    messagingSenderId: "1013331887006",
    appId: "1:1013331887006:web:877c537b254823da084c8f"
  };


//   init firebase 
firebase.initializeApp(firebaseConfig)

// init services 

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export {projectAuth, projectFirestore, timestamp, projectStorage}