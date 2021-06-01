// Write a program that calculates the area of a 
// circle. Get the radius from the user.
// use 3.14159 for the value of PI
// Display the answer like this:

// The area of a circle with radius r is A.







const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
///////////////
//get input here


rl.question("Enter a number for radius\n", function (radius) {
    area = radius * radius * 3.14159
    // area - radius * radius * Math.PI
    console.log("The area of a circle with radius " + radius + " is: " + area);
    rl.close();
});


//////////////
// output here
rl.on("close", function () {
    console.log("Bye!")
    process.exit(0);
});