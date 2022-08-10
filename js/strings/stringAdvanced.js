var hw = "Hello World!"

console.log(hw.charAt(0));
console.log(hw.charAt(hw.length - 1));

function printCharCodes(s) {
    for (let i in s) {
        console.log(s[i], s.charCodeAt(i));
    }
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
"🎴";
console.log("🎴".charCodeAt(0));
printCharCodes(alphabet)

// CTRL + CMD + Space -> open emoji window on Mac

// let start = 55000;
// let howMany = 400;
// for (let i = 0; i < howMany; i++) {
//     let c = i + start;
//     console.log(c, String.fromCharCode(c));
// }