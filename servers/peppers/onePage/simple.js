import 'dotenv/config';
const url = "mongodb+srv://admin:admin@cluster0.ogaif.mongodb.net/mydb"

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("recieved a get request")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening of port ${process.env.PORT}`)
})