var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        console.log("\n\nSERVER ERROR\n\n")
        throw err;
    }

    var mydb = db.db("mydb");

    mydb.collection("customers").drop((err, delOK) => {
        if (err) {
            throw err;
        }

        console.log(res)
        if (delOK) {
            console.log("Collection dropped")
        } else {
            console.log("Collection NOT dropped")
        }
        db.close();
    })

    // mydb.dropCollection("customers", (err, res) => {
    //     //does the same thing
    // })

})