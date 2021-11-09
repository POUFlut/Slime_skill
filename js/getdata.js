// data search
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