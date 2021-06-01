var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    // find all docs in the peppers collection
    mydb.collection("peppers")
        .find({}, {
            projection: {
                _id: 0, // 0 = exclude this - _id shows by default
                name: 1, // 1 = include this
                color: 1
            }
        })
        .toArray((err, result) => {
            if (err) {
                throw err;
            }

            console.log(result)

            db.close();
        })
})