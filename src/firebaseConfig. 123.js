import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXKSXFSWIFR1RVKkBNbdJPHT3orfN3FLs",
  authDomain: "bandswaphub.firebaseapp.com",
  projectId: "bandswaphub",
  storageBucket: "bandswaphub.firebasestorage.app",
  messagingSenderId: "513110553973",
  appId: "1:513110553973:web:36d2535dcf4576b068cf3c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();