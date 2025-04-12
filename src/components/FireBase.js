'use client';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJY6Xr2cDJLnZwj2VIszl-qjSRqq8Lf00',
  authDomain: 'myfirsrreactapp.firebaseapp.com',
  projectId: 'myfirsrreactapp',
  storageBucket: 'myfirsrreactapp.firebasestorage.app',
  messagingSenderId: '346445805501',
  appId: '1:346445805501:web:3df5fcf0ea4e3aa53544d4',
  measurementId: 'G-PTF0QQKV0T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export { auth };
export default database;
