// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVELQ-ePWGWmMfT39rtnDu8AOKLYKu3o",
  authDomain: "chef-racepi-project.firebaseapp.com",
  projectId: "chef-racepi-project",
  storageBucket: "chef-racepi-project.appspot.com",
  messagingSenderId: "596259815494",
  appId: "1:596259815494:web:43e64025118e3ff1cb4a47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
