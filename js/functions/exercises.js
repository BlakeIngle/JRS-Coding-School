main();
function main() {
    one();
    console.log(two());
    console.log(perimiterOfRect(3, 5));
    console.log(perimiterOfRect(0.23, 3.2));
    console.log(f2c(32));
    console.log(c2f(0));
    console.log(f2c(0));
    console.log(c2f(100));
    console.log(howMuchToTip(21.33, 0.2));
    console.log(getAscendingOrder(2, 1, 3));
    var n = smallestNSquaresLessThan12000();
    console.log(n, n * n, n + 1, (n + 1) * (n + 1));
    var arr = [1, 2, 3, 1, 2, 3];
    arr = [6, 5, 4, 3, 2, 1];
    console.log(sortArr(arr));
    // let arr2 = [5, 5, 5, 7, 7, 12, 3, 5]
    // console.log(arr, countValueInArr(1, arr))
    // console.log(arr2, countValueInArr(5, arr2))
    // console.log("--------")
    // console.log(arr, countAllOccurences(arr))
    // console.log(arr2, countAllOccurences(arr2))
    // console.log("--------")
    // var arr3 = [123, 'abc', false, 123, 'abc', false, 123, 'abc', false]
    // console.log(arr3, countAllOccurences(arr3))
}
function one() {
    console.log(5 + 6 + 7 + 8 + 9 + 10);
}
function two() {
    return 5 + 5 + 8 + 8;
}
function perimiterOfRect(w, h) {
    return (2 * h) + (2 * w);
}
function f2c(f) {
    return (f - 32) * (5 / 9);
}
/**
 *
 * @param {*} c temperature in celcius
 * @returns temperature in fahrenheit
 */
function c2f(c) {
    return (c * (9 / 5)) + 32;
}
/**
 *
 * @param {*} bill number of price of bill.
 * @param {*} tipPercent number 0-1 percent of bill to tip
 * @returns how much money you should tip for the bill
 */
function howMuchToTip(bill, tipPercent) {
    return Number((bill * tipPercent).toFixed(2));
}
function getCurrentDateTime() {
    return new Date();
}
function get33DaysFromNow() {
    var d = new Date();
    d.setDate(d.getDate() + 33);
    return d;
}
function averageInArr(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        sum += value;
    }
    return sum / arr.length;
}
function getRandomMonth() {
    var months = [
        "January",
        "Feburary",
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
    return months[Math.floor(Math.random() * months.length)];
}
function getAscendingOrder(a, b, c) {
    if (a >= b) {
        if (b >= c) {
            // a b c
        }
        else if (a >= c) {
            // a c b
        }
        else {
            // c a b
        }
    }
    else if (c >= b) {
        // c b a
    }
    else if (c >= a) {
        // b c a
    }
    else {
        // b a c
    }
    return [a, b, c];
}
function reverseOfString(s) {
    var reversedS = "";
    for (var i = s.length - 1; i >= 0; i--) {
        reversedS += s.charAt(i);
    }
}
function isPalindrome(s) {
    return reverseOfString(s) === s;
}
function isCoerced(a, b) {
    return a == b && (a !== b);
}
function isEven(n) {
    return n % 2 == 0;
}
function isOdd(n) {
    return !isEven(n);
}
function isDivisibleBy3(n) {
    return n % 3 == 0;
}
function isADivisbleByB(a, b) {
    return a % b == 0;
}
function smallestNSquaresLessThan12000() {
    var n = 1;
    while (n * n <= 12000) {
        n++;
    }
    return n - 1;
}
function smallestN(limit) {
    var n = 1;
    while (n * n <= limit) {
        n++;
    }
    return n - 1;
}
function sumInArr(arr) {
    var sum = 0;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var value = arr_2[_i];
        sum += value;
    }
    return sum;
}
function smallestInArr(arr) {
    var smallestN = arr[0];
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var value = arr_3[_i];
        if (value < smallestN) {
            smallestN = value;
        }
    }
    return smallestN;
}
// 25
function countValueInArr(value, arr) {
    var count = 0;
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var _value = arr_4[_i];
        if (value === _value) {
            count++;
        }
    }
    return count;
}
// 26
function countAllOccurencesSlow(arr) {
    var results = [];
    // for every value in arr
    outerLoop: for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
        var value = arr_5[_i];
        //  check if we already saw that value
        //              look in results[j][0]
        for (var j = 0; j < results.length; j++) {
            if (arr[j][0] === value) {
                continue outerLoop;
            }
        }
        //      if not, then count the occurances
        var count = countValueInArr(value, arr);
        //      push [arr[i], count] to results
        arr.push([value, count]);
    }
    return results;
}
function countAllOccurences(arr) {
    var results = [];
    outerLoop: for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
        var value = arr_6[_i];
        for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
            var found = results_1[_a];
            if (found[0] === value) {
                // already found once at least
                found[1]++;
                continue outerLoop;
            }
        }
        results.push([value, 1]);
    }
    return results;
}
// 27 
function isArraySorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // out of order
            return false;
        }
    }
    return true;
}
// 28
function sortArr(arr) {
    for (var j = arr.length; j >= 0; j--) {
        for (var i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // out of order - swap
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
