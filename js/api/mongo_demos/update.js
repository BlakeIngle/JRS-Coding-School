var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    var query = { _id: 154 };
    // Chocolate Heaven
    var newValues = {
        $set: {
            price: 12.95,
            name: "Chocolate Heaven"
        }
    };

    // update one entry
    mydb.collection("products")
        .updateOne(query, newValues, (err, res) => {
            if (err) {
                throw err;
            }

            console.log("1 document updated");
            db.close();
        })

})