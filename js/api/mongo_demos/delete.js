var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    // delete one entry
    mydb.collection("customers", (err, res) => {
        if (err) {
            throw err;
        }

        //res is the collection
        var collection = res;
        collection.deleteOne({}, (err, res) => {
            if (err) {
                throw err;
            }

            console.log(res)
            console.log("\n\t1 document deleted")
            db.close();
        })
    })
})