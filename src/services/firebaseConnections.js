import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASLyT2MM3e3GkQO6VNm4pVKOlW4ggzF1E",
  authDomain: "chamados-eb2e8.firebaseapp.com",
  projectId: "chamados-eb2e8",
  storageBucket: "chamados-eb2e8.firebasestorage.app",
  messagingSenderId: "527516209352",
  appId: "1:527516209352:web:d44c543e89aa6fdb3315fd",
  measurementId: "G-EZHKGZCP3X"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db};