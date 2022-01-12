// const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/index");
require('./app/routes/books.routes')(app);
require('./app/routes/users.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});