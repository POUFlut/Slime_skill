//getData

function getData() {
    document.write('<script type="module" src="js/connectDB.js"></script>');
    db.collection('char').where('skill', 'array-contain', 'ZB2ZA').get().then(result => {
        Array.prototype.forEach.call(result.docs, r => {
            console.log(r.id)
                console.log(r.data())
        })
    })
}
