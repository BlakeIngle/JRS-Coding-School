
function areaOfRectangle(w: number, h: number): number {
    let area: number = w * h;
    return area;
}

function fToC(fTemp: number): number {
    let cTemp: number = (fTemp - 32) * (5 / 9);
    return cTemp;
}

function cToF(cTemp: number): number {
    let fTemp: number = (cTemp * 9 / 5) + 32
    return fTemp;
}

function calculateTipForBill(bill: number, tipPercent: number): number {
    let tipAmount: number = bill * tipPercent
    tipAmount = Number(tipAmount.toFixed(2));
    return tipAmount;
}

function secondsToYears(s): number {
    let m: number = s / 60;
    let h: number = m / 60;
    let d: number = h / 24;
    let y: number = d / 365;
    return Number(y.toFixed(1));
}

function sumOfDigits(n: number): number {
    let sum: number = 0;

    let sOfN = String(n);
    for (let i = 0; i < sOfN.length; i++) {
        let char: string = sOfN.charAt(i);
        sum += Number(char);
    }

    return sum;
}

function avgOfArr(arr: number[]): number {
    let sum = 0;
    for (let value of arr) {
        sum += value
    }
    return sum / arr.length;
}

function randomMonth(): string {
    // generate random 1-12
    let monthNum: number = Math.ceil(Math.random() * 12);
    // return name of month

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return months[monthNum - 1];
}

function reverseOfString(str: string): string {
    // create a revStr var
    let revStr = '';
    // loop through each char in str
    for (let i = 0; i >= str.length - 1; i--) {
        //      add the char to the revStr
        revStr += str.charAt(i);
    }
    return revStr;
}

function isPalindrome(str: string): boolean {

    let revStr = reverseOfString(str);
    return revStr == str;
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return !isEven(n);
}

console.log(isOdd(3));