// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyN1Yqz1BhhDudpVt3Uldo_o_5PSi2oK8",
  authDomain: "clone-7ac03.firebaseapp.com",
  projectId: "clone-7ac03",
  storageBucket: "clone-7ac03.appspot.com",
  messagingSenderId: "707475266558",
  appId: "1:707475266558:web:c30ea6e540c1e2adda3eaf",
  measurementId: "G-LRVBTE4C2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
export{db,auth};