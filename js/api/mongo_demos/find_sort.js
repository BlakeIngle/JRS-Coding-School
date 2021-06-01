var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-fzg1xm-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"

MongoClient.connect(url, (err, db) => {
    if (err) {
        throw err;
    }

    var mydb = db.db("mydb"); // mydb is the name of MY databse

    var mySort = { name: 1 }

    //  1: ascending order
    // -1: descending order
    // { 'shu.max': 1, color: 1, name: 1 } // sort multiple fields
    // { 'shu.min': -1 } // sort by property of property

    mydb.collection("peppers")
        .find()
        .sort(mySort)
        .toArray((err, res) => {
            if (err) {
                throw err;
            }

            console.log(res);

            db.close();
        })
})