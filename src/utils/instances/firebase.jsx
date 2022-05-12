// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKt8ASLjXtctwWUA56yM6aZT2YqM113k",
  authDomain: "stanrute-cms.firebaseapp.com",
  projectId: "stanrute-cms",
  storageBucket: "stanrute-cms.appspot.com",
  messagingSenderId: "1552741719",
  appId: "1:1552741719:web:9de73ba0b5a233cf50fa12",
  measurementId: "G-4QWCEB3K3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
