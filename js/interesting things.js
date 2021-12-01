
// ++ 


// +


// string -> with strings and numbers

// numbers -> with other numbers 


// ++ -> increment
// --

// a--; //subtract 1


// a = 4;

// a++;
// console.log(a)



var a = 4;
var b = a++;

var c = 8;
var d = ++c;

console.log(a, b, c, d);


var h = "hello"
var w = "world!"

console.log(h < w)
console.log('a' < 'A')



function printCharCodes(s) {
    for (let i = 0; i < s.length; i++) {
        console.log(s.charAt(i), s.charCodeAt(i));
    }
}
function printCharsFromCodes(start, howMany) {
    for (let i = start; i <= start + howMany; i++) {
        console.log(i, String.fromCharCode(i))
    }
}
printCharCodes('AZaz019., /? 😎')
printCharsFromCodes(55300, 100)
