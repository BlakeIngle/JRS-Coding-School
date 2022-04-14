var monthNum = Math.ceil(Math.random() * 12);
var monthName;

// finds the month name
switch (monthNum) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        monthName = "Error"
        break;
}

var season;
// finds the correct season (Spring, Summer, Autumn, Winter)
switch (monthName) {
    case "January":
    case "February":
    case "March":
        season = "Winter"
        break;
    case "April":
    case "May":
    case "June":
        season = "Spring"
        break;
    case "July":
    case "August":
    case "September":
        season = "Summer"
        break;
    case "October":
    case "November":
    case "December":
        season = "Autumn"
        break;
    default: season = 'error'
} // break ->

console.log(monthName, 'is', season)