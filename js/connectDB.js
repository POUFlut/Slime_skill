firebase.initializeApp({
    authDomain: "slime-skill-db.firebaseapp.com",
    projectId: "slime-skill-db",
    storageBucket: "slime-skill-db.appspot.com",
});

const db = firebase.firestore();
const storage = firebase.storage();