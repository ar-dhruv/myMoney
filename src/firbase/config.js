import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVIYBR1KMJEg3L-BYACEc1xKh6n7f3HmI",
  authDomain: "mymoney-6f59d.firebaseapp.com",
  projectId: "mymoney-6f59d",
  storageBucket: "mymoney-6f59d.appspot.com",
  messagingSenderId: "467292591672",
  appId: "1:467292591672:web:31013d5acaddad0f9938cd",
};

//INIT FIREBASE

firebase.initializeApp(firebaseConfig);

//INIT FIREBASE SERVICES

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//EXPORTING SERVICES

export { projectFirestore, projectAuth };
