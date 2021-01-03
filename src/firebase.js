import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDc_yuctx4B0jrTg1FgEtj8zM8MVPJRP0E",
  authDomain: "clone-2-c8103.firebaseapp.com",
  projectId: "clone-2-c8103",
  storageBucket: "clone-2-c8103.appspot.com",
  messagingSenderId: "692331120918",
  appId: "1:692331120918:web:609534e1e4cef6f3092837",
  measurementId: "G-NMXEVK75PP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth= firebase.auth();

export { db, auth };