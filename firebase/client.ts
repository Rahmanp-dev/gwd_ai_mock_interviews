// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAiVtZp1g0A_smlmdffMc6-_cD_iew7b8",

  authDomain: "gwd-ai-mock-interviews.firebaseapp.com",

  projectId: "gwd-ai-mock-interviews",

  storageBucket: "gwd-ai-mock-interviews.firebasestorage.app",

  messagingSenderId: "62248465920",

  appId: "1:62248465920:web:40b12cfd70fb0e0ee70ae5",

  measurementId: "G-WJQCTNC884",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
