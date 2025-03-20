// Import Firebase SDK functions
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1QvbNyRr5I7OrlhVZNs2qYFpA9FnFTow",
  authDomain: "loginapp-a3a72.firebaseapp.com",
  projectId: "loginapp-a3a72",
  storageBucket: "loginapp-a3a72.appspot.com", // Fixed storageBucket
  messagingSenderId: "279174461941",
  appId: "1:279174461941:web:443f5fb0378783330c48bc",
  measurementId: "G-F7WL44JMYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

