import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRGJAbCRVc8_zKLjlxKFeJLTEYWPrKtsI",
    authDomain: "app-de-dulces.firebaseapp.com",
    projectId: "app-de-dulces",
    storageBucket: "app-de-dulces.appspot.com",
    messagingSenderId: "663097681645",
    appId: "1:663097681645:web:e374482f86b81233268ee4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
