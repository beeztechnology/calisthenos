import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { COLLECTIONS } from "./collections";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export const colls = {
  training_plans: collection(db, COLLECTIONS.TRAINING_PLANS)
}
