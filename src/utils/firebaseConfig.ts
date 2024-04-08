import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "kanban-419120",
  storageBucket: "kanban-419120.appspot.com",
  messagingSenderId: "697428607616",
  appId: "1:697428607616:web:b79c55cff0378075591c65",
  measurementId: "G-05G4GJY0F1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
