document.write('<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase.js"></script>');
document.write('<script src="https://www.gstatic.com/firebasejs/4.12.1/firebase-firestore.js"></script>');
firebase.initializeApp({
		projectId:"slime-skill-DB"
	});
	const db = firebase.firestore();