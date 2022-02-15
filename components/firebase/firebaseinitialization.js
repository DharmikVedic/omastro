import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASzlJpai0_UjhaF0ju49lSowaJ7G3C_y8",
  authDomain: "homeastro-6b091.firebaseapp.com",
  projectId: "homeastro-6b091",
  storageBucket: "homeastro-6b091.appspot.com",
  messagingSenderId: "800559052737",
  appId: "1:800559052737:web:3721bfc9f5908982e4a140",
  measurementId: "G-FVD7QC6NM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
