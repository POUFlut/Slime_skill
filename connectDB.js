import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
  import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
    apiKey: "AIzaSyAJ1Of_t7VOmLf_Q9R6OFKMPRoYAyBYzLY",
    authDomain: "slime-skill-db.firebaseapp.com",
    projectId: "slime-skill-db",
    storageBucket: "slime-skill-db.appspot.com",
    messagingSenderId: "1054534804180",
    appId: "1:1054534804180:web:c715ebe31ef3f92d335141",
    measurementId: "G-D2YZY8W121"
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
    try {
const docRef = await addDoc(collection(db, "usersss"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}