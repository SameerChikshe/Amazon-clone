import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKOWw8Sy00j2ckJ7w4dZC6NzAxwXJa_4A",
    authDomain: "clone-1b764.firebaseapp.com",
    projectId: "clone-1b764",
    storageBucket: "clone-1b764.appspot.com",
    messagingSenderId: "764431029488",
    appId: "1:764431029488:web:658f34e19f14e692935e35",
    measurementId: "G-KKY61N19CW"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };