const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a math equation.\n", function(palindrome) {

    ////////////////////

    ////////////////////
    rl.close();
});

rl.on("close", function() {
    console.log("'" + p + "' is" + (isP ? "" : " not") + " a palindrome")
    process.exit(0);
});