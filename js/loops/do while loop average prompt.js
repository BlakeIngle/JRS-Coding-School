sum = 0;
i = 0;

do {
    newNum = Number(prompt("Enter a number."));
    sum += newNum;
    i++;
} while(prompt("Another number?\n'y' for yes, 'n' for no.") == 'y');

average = sum / i;

console.log("the average of all those numbers is: " + average);