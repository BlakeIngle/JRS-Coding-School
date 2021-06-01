// Welcome to the JRS Code School




















console.log("Hello World!")


//this is a comment. the computer does not try to execute a comment


console.log(5)


console.log(5 + 3)


console.log(7 - 2)
console.log(4 * 9)
console.log(15 / 5)



// lets try to save an answer
a = 5 + 4;



//what does this mean ?


//we can save data to a variable. this variable 'a' has the value of 5 + 4
//so a = 9
console.log(a)




// = is technically called the assignment operator
// it is used to assign a value to a variable
// = 'single equals' is not used for math



// == 'double equals' is something you will see later
// === 'tripple equals' is even more advanced


//now we can reference the value of a (which is 9) by using a in another expression
//we can even do math with a
console.log(a + 4)


//more variables
b = 9 - 3;


//now we can do whole expressions without using any literal values. Only use variables
console.log(a, b, a + b)


//now get input from the user to save in a variable


//prompt will do that for us
prompt("Enter a number:")


//we used prompt, but how do we reference the value of prompt???

c = prompt("Enter a number.")
console.log(c)


// now lets mix together words and variables in the console.log
// the variables have all been numbers
// this is a 'data type'
// example data types:

//      number
//      string
//      char
//      array
//      object
//      ...and more

// strings are the data type that look like words
// string of characters
// numbers can be int, double, float, and other number types

// literal strings can be pieced together with variables
// numbers can be interpreted as strings
//      strings cannot be interpreted as numbers (* unless you know how)

// we can piece together strings and variables just like math problems
console.log("a = " + a)




//remember to use 2 " double quotes to surround a string and add spaces when needed.

//////////////
// practice:

// write a program that displays "Hello World! My name is Blake."
// "Hello World!" (hw) and "Blake" (myName) must be variables
// check for correct spacing and punctuation











hw = "Hello World!"
myName = "Blake"

console.log(hw = " My name is " + myName + ".");



/////////////////////////
// do practice problem //
/////////////////////////
// variables practice.js