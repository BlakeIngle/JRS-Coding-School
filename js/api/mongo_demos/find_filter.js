var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");


    var query = { color: 'red' };
    // { name: /^C/ } filter all names starting with C

    // find all docs in the peppers collection
    mydb.collection("peppers").find(query).toArray((err, result) => {
        if (err) {
            throw err;
        }

        console.log(result)

        db.close();
    })
})