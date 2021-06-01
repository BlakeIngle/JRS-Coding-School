// write a function that writes to the console
// every integer from 0 to 9
// use a loop


// write a function that writes to the console
// every integer from -5 to 8
// use a loop


// write a function that writes to the console
// every even integer from 1 to 10 that is not 6













console.log("every integer from 0 to 9")
for (let i = 0; i < 10; i++) {
     console.log(i)
}

console.log("every integer from -5 to 8")
for (let i = -5; i < 9; i++) {
     console.log(i)
}

console.log("every even integer from 1 to 10 that is not 6")
for(let i = 1; i <= 10; i++) {
     if(i % 2 == 0) {
          if(i != 6) {
               console.log(i);
          }
     }
}