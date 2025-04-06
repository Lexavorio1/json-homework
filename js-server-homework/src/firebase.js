import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCWJ1pSzm23KgK0d8_DGtM012soRY_b4KY",
  authDomain: "comments-123-b2365.firebaseapp.com",
  projectId: "comments-123-b2365",
  storageBucket: "comments-123-b2365.firebasestorage.app",
  messagingSenderId: "45779383691",
  appId: "1:45779383691:web:66bc9192ed688d7431eb8e",
  databaseURL: 'https://comments-123-b2365-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);

export const todosFireBase = getDatabase(app)