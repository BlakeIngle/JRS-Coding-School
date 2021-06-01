// write a program that calculates the volume
// of a cylinder. Get input from the user
// for the height and radius.

// The volume of a cylinder can be calculated
// with the formula: V = PI * r^2 * h

// where v = volume
//      r = radius
//      h = height

// use the Math library for PI and r^2
Math.PI 

h = 4;
r = 2;

v = 3.14159 * r * r * h;
console.log(v)






const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
///////////////
//get input here


rl.question("Enter the height of the cylinder:\n", function (h) {
    a = rl.question("Enter the radius of the cylinder:\n", (r) => {
        v = Math.PI * Math.pow(r, 2) * h;
        console.log("The volume of a cylinder with radius " + r + " and height " + h + " is:\n" + v)
        rl.close();
    });
});


//////////////
// output here
rl.on("close", function () {
    process.exit(0);
});