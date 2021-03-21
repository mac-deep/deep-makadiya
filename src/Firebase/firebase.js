import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyD2F7giVPQErlwiWTNVFUOvRsrU2Wv4GZo',
  authDomain: 'myportfolio-2511.firebaseapp.com',
  projectId: 'myportfolio-2511',
  storageBucket: 'myportfolio-2511.appspot.com',
  messagingSenderId: '452508085051',
  appId: '1:452508085051:web:2440302e7fd977450d251e',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const projectStorage = firebase.storage();
