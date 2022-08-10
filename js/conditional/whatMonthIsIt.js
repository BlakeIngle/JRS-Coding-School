// given a number 1-12
// output a message that says what month
// coresoponds with that number
// ex: 6 -> June, 9 -> September

// Output:
// '4 is April'

let monthNumber = Math.ceil(Math.random() * 12);
let monthName; //

// if (monthNumber == 1) {
//     console.log(monthNumber + " is January")
// } else if (monthNumber == 2) {
//     console.log(monthNumber + " is February")
// } else if (monthNumber == 3) {
//     console.log(monthNumber + " is March")
// } else if (monthNumber == 4) {
//     console.log(monthNumber + " is April")
// } else if (monthNumber == 5) {
//     console.log(monthNumber + " is May")
// } else if (monthNumber == 6) {
//     console.log(monthNumber + " is June")
// } else if (monthNumber == 7) {
//     console.log(monthNumber + " is July")
// } else if (monthNumber == 8) {
//     console.log(monthNumber + " is August")
// } else if (monthNumber == 9) {
//     console.log(monthNumber + " is September!!!")
// } else if (monthNumber == 10) {
//     console.log(monthNumber + " is October")
// } else if (monthNumber == 11) {
//     console.log(monthNumber + " is November")
// } else if (monthNumber == 12) {
//     console.log(monthNumber + " is December")
// } else {
//     console.log(monthNumber + ' is not a valid month number')
// }

if (monthNumber == 1) {
    monthName = "January"
} else if (monthNumber == 2) {
    monthName = "February";
} else if (monthNumber == 3) {
    monthName = "March";
} else if (monthNumber == 4) {
    monthName = "April";
} else if (monthNumber == 5) {
    monthName = "May";
} else if (monthNumber == 6) {
    monthName = "June";
} else if (monthNumber == 7) {
    monthName = "July";
} else if (monthNumber == 8) {
    monthName = "August";
} else if (monthNumber == 9) {
    monthName = "September!!!";
} else if (monthNumber == 10) {
    monthName = "October";
} else if (monthNumber == 11) {
    monthName = "November";
} else if (monthNumber == 12) {
    monthName = "December";
} else {
    monthName = 'not a valid month number'
}

console.log(monthNumber + ' is ' + monthName)
