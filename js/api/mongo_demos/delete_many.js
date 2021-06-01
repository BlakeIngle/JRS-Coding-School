var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log("\n\nSERVER ERROR\n\n")
        throw err;
    }

    var mydb = db.db("mydb");

    var query = { address: /2/ }

    // delete one entry
    mydb.collection("customers", (err, res) => {
        if (err) {
            console.log("collection error")
            throw err;
        }
        res.deleteMany(query, (err, res) => {
            if (err) {
                throw err;
            }
            console.log(res.result.n + " document(s) deleted")
            db.close();
        })
    })

})