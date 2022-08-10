const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a math equation.\n", function (input) {

    ////////////////////
    console.log("you typed this: ", input)
    ////////////////////
    rl.close();
});

rl.on("close", function () {
    process.exit(0);
});