import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm1vyD8m9E3PGO2xoKlZsZ5Zka8mvgyHk",
  authDomain: "acwad-462f8.firebaseapp.com",
  databaseURL: "https://acwad-462f8-default-rtdb.firebaseio.com",
  projectId: "acwad-462f8",
  storageBucket: "acwad-462f8.firebasestorage.app",
  messagingSenderId: "1088179859100",
  appId: "1:1088179859100:web:b5773f9fa7e04d205a4759",
  measurementId: "G-KLJS29Y9HV"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
