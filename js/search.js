document.write('<script src="js/connectDB.js"></script>');

let ref = db.collection('fight');
ref.whereArrayContains('skill','ZA2ZB').get().then(querySnapshot => {
  querySnapshot.forEach(A110101 => {
    console.log(A110101.data());
  });
});