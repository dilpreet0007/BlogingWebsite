// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHcPtdvr48wGjLnXzIscSB88VMQWHJoxQ",
  authDomain: "myblog-bf1b7.firebaseapp.com",
  projectId: "myblog-bf1b7",
  storageBucket: "myblog-bf1b7.appspot.com",
  messagingSenderId: "905449669085",
  appId: "1:905449669085:web:0dd4f04f0517ceb9ef3634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}