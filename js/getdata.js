// connect and import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
const firebaseConfig = {
	apiKey: "AIzaSyAJ1Of_t7VOmLf_Q9R6OFKMPRoYAyBYzLY",
	authDomain: "slime-skill-db.firebaseapp.com",
	projectId: "slime-skill-db",
	storageBucket: "slime-skill-db.appspot.com",
	messagingSenderId: "1054534804180",
	appId: "1:1054534804180:web:c715ebe31ef3f92d335141",
	measurementId: "G-D2YZY8W121"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

//getData
function getData() {
    try {
        db.collection('char').where('skill', 'array-contain', 'ZB2ZA').get().then(result => {
            Array.prototype.forEach.call(result.docs, r => {
                console.log(r.id)
                console.log(r.data())
            })
        })
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}