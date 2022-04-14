var monthNum = Math.ceil(Math.random() * 12);
console.log("Month: ", monthNum);
/**
 * write some code that will console.log a message
 * that says what month it (monthNum) is
 *
 * hint: use if, else if, else if... else
 */
var monthName;

if (monthNum === 1) {
    monthName = "January";
} else if (monthNum === 2) {
    monthName = "February";
} else if (monthNum === 3) {
    monthName = "March";
} else if (monthNum === 4) {
    monthName = "April";
} else if (monthNum === 5) {
    console.log(monthNum, 'is May');
} else if (monthNum === 6) {
    console.log(monthNum, 'is June');
} else if (monthNum === 7) {
    console.log(monthNum, 'is July');
} else if (monthNum === 8) {
    console.log(monthNum, 'is August');
} else if (monthNum === 9) {
    console.log(monthNum, 'is September');
} else if (monthNum === 10) {
    console.log(monthNum, 'is October');
} else if (monthNum === 11) {
    console.log(monthNum, 'is November');
} else {
    console.log(monthNum, 'is December');
}

console.log(monthNum, 'is ' + monthName)