import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmgjqbaYsvcVs5VDemMdpB9MM3fW-HKlU',
  authDomain: 'saas-translator-app-6c7d9.firebaseapp.com',
  projectId: 'saas-translator-app-6c7d9',
  storageBucket: 'saas-translator-app-6c7d9.appspot.com',
  messagingSenderId: '883215770422',
  appId: '1:883215770422:web:d1f51cd01e83be7c184997',
  measurementId: 'G-RR59L2C3ZF',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
