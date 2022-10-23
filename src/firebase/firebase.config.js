// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdF_SEOOioJW6UZ9hzmPjmWZO9zB9NhGE",
    authDomain: "daily-bugle-news.firebaseapp.com",
    projectId: "daily-bugle-news",
    storageBucket: "daily-bugle-news.appspot.com",
    messagingSenderId: "295085729162",
    appId: "1:295085729162:web:13663e68c236e2f7ee9473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;