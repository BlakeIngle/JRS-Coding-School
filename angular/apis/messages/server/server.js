const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
    origin: "*"
};

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/index");
require("./app/routes/messages.routes")(app);
require("./app/routes/users.routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`\n\tServer running on port ${PORT}\n`);
});