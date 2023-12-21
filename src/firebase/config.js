import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCt6rWvR4Zmf4XmxYzb4F2yd9sXbOGI5Fw",
  authDomain: "finance-tracker-fc180.firebaseapp.com",
  projectId: "finance-tracker-fc180",
  storageBucket: "finance-tracker-fc180.appspot.com",
  messagingSenderId: "628726267886",
  appId: "1:628726267886:web:a4d9c31d1617c7bdc818ff",
  measurementId: "G-1BQ2KVPSK6"
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export {projectFirestore, projectAuth, timestamp};
