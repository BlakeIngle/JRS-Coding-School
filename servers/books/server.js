const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config();

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/index');
require('./app/routes/books.routes')(app);
require('./app/routes/users.routes')(app);
// require('./app/routes/foo.routes')(app);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
