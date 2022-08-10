import express from "express";
import bodyParser from 'body-parser';
import _8ballRoutes from './app/routes/8ball.routes.js'

let app = express();
app.use(bodyParser.json());

let myArr = [];

app.get('/', (req, res) => {
    let r = Math.ceil(Math.random() * 10)
    res.send({
        message: 'Hi! Welcome to the Magic 8 Ball API.',
        number: r
    });
});

app.get('/array', (req, res) => {

    if (myArr == undefined) {
        res.status(500).send();
    } else {
        res.send({
            arr: myArr
        });
    }

});

app.get('/array/:i', (req, res) => {

    let i = req.params.i;
    i = Number(i);

    if (isNaN(i)) {
        res.status(400).send({
            message: 'i segment must be a number'
        });
        return;
    } else if (i < 0) {
        res.status(400).send({
            message: 'invalid value for the index. i cannot be negative.'
        });
        return;
    }

    let value = myArr[i];

    if (value === undefined) {
        res.status(404).send({
            message: 'Data does not exist at that index'
        });
        return;
    }

    res.send({
        n: myArr[i]
    });
});

app.post('/', (req, res) => {
    myArr.push(req.body.n);

    res.send();
});


/////////// hook up the routes here
_8ballRoutes(app);

app.listen(8080, () => {
    console.log("App is listening at port: 8080");
});