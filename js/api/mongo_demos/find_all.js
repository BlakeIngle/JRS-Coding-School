var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    // find all docs in the peppers collection
    mydb.collection("peppers").find({}).limit(5).toArray((err, result) => {
        if (err) {
            throw err;
        }

        console.log(result)

        db.close();
    })
})