// write a function that displays the fibonachi sequence
// print each number in the sequence to a new line
// show the first 10 digits

// the fibonachi sequence starts with 0 and 1
// each number after that is the sum of the previous 2 numbers
// you may log 0 outside of the loop
// all other numbers must be logged in a loop

// hint: use variables to keep track of the last 2 numbers













prev2 = 0
prev1 = 1


for(let i = 0; i < 10; i++) {
     if (i == 0) {
          console.log(0)
     } else {
          next = prev1 + prev2
          prev2 = prev1
          prev1 = next
          console.log(next)
     }
}