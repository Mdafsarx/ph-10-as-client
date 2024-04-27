// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6lTj53VaYyVEtYc0Yn8cIHjKKrsdYYuI",
  authDomain: "ph-as-10-5cc8c.firebaseapp.com",
  projectId: "ph-as-10-5cc8c",
  storageBucket: "ph-as-10-5cc8c.appspot.com",
  messagingSenderId: "1063951727648",
  appId: "1:1063951727648:web:eead865de0168b2828d045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth