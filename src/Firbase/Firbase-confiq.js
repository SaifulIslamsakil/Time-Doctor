// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqcQ-9FrYbduJs2uPB1R9FAX-dEjZhibo",
  authDomain: "time-doctor-f0807.firebaseapp.com",
  projectId: "time-doctor-f0807",
  storageBucket: "time-doctor-f0807.appspot.com",
  messagingSenderId: "541080344468",
  appId: "1:541080344468:web:6f9c80ed9e474e6c4da181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth