import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9k4vx6wKhP1yqb4PpeZ0QrYbDRZ5JuaE",
  authDomain: "pictagram-fa86d.firebaseapp.com",
  projectId: "pictagram-fa86d",
  storageBucket: "pictagram-fa86d.appspot.com",
  messagingSenderId: "515888720689",
  appId: "1:515888720689:web:fd2f619611775e663fde10",
};

// Initialize Firebase and Auth
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
