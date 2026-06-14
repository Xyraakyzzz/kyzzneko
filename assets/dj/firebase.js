import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6gIg-u6a0ynHnRpz5ovtQiacj5NBrQZ4",
  authDomain: "x-mcjs-api.firebaseapp.com",
  databaseURL: "https://x-mcjs-api-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "x-mcjs-api",
  storageBucket: "x-mcjs-api.firebasestorage.app",
  messagingSenderId: "978202552843",
  appId: "1:978202552843:web:9c5adfc553c807a2fdb50e",
  measurementId: "G-GX1EZB0GQW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
