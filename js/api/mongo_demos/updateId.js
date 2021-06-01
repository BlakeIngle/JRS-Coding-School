var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb";

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb");

    // update one entry
    mydb.collection("peppers", (err, coll) => {
        if (err) {
            console.log("ERROR connecting")
            throw err;
        }

        coll.find().toArray((err, res) => {
            if (err) {
                console.log("ERROR getting all")
                throw err;
            }

            var myPeppers = res;

            for (let i = 0; i < myPeppers.length; i++) {

                console.log("\n\n")
                console.log(myPeppers)
                console.log("\n\n")
                var query = { name: myPeppers[i].name };

                var newValues = {
                    $unset: {
                        _id: 1
                    }
                };

                coll.updateOne(query, newValues, (err, res) => {
                    if (err) {
                        console.log("ERROR updating")
                        throw err;
                    }

                    console.log("1 document updated");
                })
            }
        });
    })
})



// { n: 1, nModified: 2, ok: 1 }