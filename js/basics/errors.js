a = 4;

b = c; //c is not defined

console.log(d) // d is referenced before being declared
d = 4;

console.log(Hello world!) //forgot to use " "

if (a = b) { // = is assignment, not comparative
    console.log("a = b"); // will execute and output
}