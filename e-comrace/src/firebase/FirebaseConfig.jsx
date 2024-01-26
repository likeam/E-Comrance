import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkptJwlw0LcKxWzj6LpIxvk_eB46Gx8rI",
  authDomain: "videos-365214.firebaseapp.com",
  projectId: "videos-365214",
  storageBucket: "videos-365214.appspot.com",
  messagingSenderId: "368960091061",
  appId: "1:368960091061:web:484a78a76e9ba20cc3dffc"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth};