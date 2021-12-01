

for (let i = 0; i < 3; i++) {
    console.log("i is: " + i);
    ////////////////////////////////////
    for (let j = 0; j < 10; j++) {
        console.log("\tj is: " + j);
    }
    /////////////////////////////////////
}




// write a function that prints a message to the console

// *   i  //print j 0 times
// *   i         // use i and j in nested loops
//      j        // console.log() statements can only be inside the loops
// *   i
//      j
//      j
// *   i
//      j
//      j
//      j
// *   i
//      j
//      j
//      j
//      j
// *

for (let i = 0; i < 6; i++) {
    console.log("i");
    for (let j = 0; j < i; j++) {
        console.log("\tj")
    }
}


// write a function that prints every int from 1-100 in ascending order

// if the number is divisible by 4, then print the * as many times as that 
// number is divisible by 4 
// number / 4
// number % 4 == 0
// for(let i = 1; i <= 100; i++)

// for(let j = 0; j < (i / 4); j++ )

//--------------------------------------------------------------------------//
// 1
// ...
// 4
//      *
// ...
// 8 
//      *
//      *
// ...
// 100

// nested loops
// if statement