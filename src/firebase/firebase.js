// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDABoTz_2n_hwDYRi8wKJkHMdIDJ6o1RXw",
  authDomain: "meroshare-revamped.firebaseapp.com",
  projectId: "meroshare-revamped",
  storageBucket: "meroshare-revamped.appspot.com",
  messagingSenderId: "677294918806",
  appId: "1:677294918806:web:32c8f68a2874b440ed46b7",
  measurementId: "G-PKPR2X645X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);