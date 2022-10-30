// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPGH9uaQOW5xCwP-wf-jwfcPiiTDBiv7E",
  authDomain: "estephania-santos.firebaseapp.com",
  projectId: "estephania-santos",
  storageBucket: "estephania-santos.appspot.com",
  messagingSenderId: "84939510165",
  appId: "1:84939510165:web:6358c53debd4dbf777669c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);