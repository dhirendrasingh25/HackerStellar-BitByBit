// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2j5YEmkayqdLt_a4uDBRK6doHxn2K6Yo",
  authDomain: "hackerstellar-78c40.firebaseapp.com",
  projectId: "hackerstellar-78c40",
  storageBucket: "hackerstellar-78c40.appspot.com",
  messagingSenderId: "978143568409",
  appId: "1:978143568409:web:5b15bb915f0d0ca06a0088"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export {auth};