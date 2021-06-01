// write a program that gets 2 numbers from the user 
// and then prompt the user for an operator (+ - * /)
// and then either adds, subtracts, multiplies, or divides 
// the two numbers based on the operator that was entered

// Use meaningful messages in any prompts

// use 'a' and 'b' for the number's variable names
// and use 'operator' for the + - * or / sign's variable name

// hint: use a variable called 'answer'

// Bonus challenge:
// Get the user's name and make a better display message:
// "Blake, 5 + 4 = 9"


















user = prompt("Hello, please enter your name")

a = prompt("Enter a number")// first number
console.log("a = " + a)

b = prompt("Enter another number")// second number
console.log("b = " + b)

operator = prompt("What math operation do you want to perform?")// + - * /

if (operator == "+") {
    answer = a + b;
} else if (operator == "-") {
    answer = a - b;
} else if (operator == "*") {
    answer = a * b
} else if (operator == "/") {
    answer = a / b
} else {
    // you did not type a valid operator
    // error handling is a very important part of programming
    // sometimes you get a result you weren't expecting
    
    // if you are writing a program for someone else to use
    // they might use it wrong. We will cover error handling more later
}

console.log(user + ", a " + operator + " b = " + answer)