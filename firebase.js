// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuoiuVxoIorHVVFjjVcSVe_PH-EXUFemM",
    authDomain: "new-project-ebefe.firebaseapp.com",
    projectId: "new-project-ebefe",
    storageBucket: "new-project-ebefe.appspot.com",
    messagingSenderId: "276269565488",
    appId: "1:276269565488:web:636f1faa222ebba70e4ff5",
    measurementId: "G-6WXFPSGJ0P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };