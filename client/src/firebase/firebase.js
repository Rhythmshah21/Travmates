// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNgciE8yGEunM0x0wOOUbL06zNcHlbj5U",
  authDomain: "travmates-a5785.firebaseapp.com",
  projectId: "travmates-a5785",
  storageBucket: "travmates-a5785.appspot.com",
  messagingSenderId: "293411485525",
  appId: "1:293411485525:web:c9db596a3835c04896e1dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const UsersRef = collection(db,"Users")
// export const messagesEndRef = collection(db,"messages")
export const auth = getAuth(app);
export default app