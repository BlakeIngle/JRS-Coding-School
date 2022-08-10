let s = 'The quick brown fox jumps over the lazy dog';

let a = (s.match(/a/g) || []).length
let e = (s.match(/e/g) || []).length
let i = (s.match(/i/g) || []).length
let o = (s.match(/o/g) || []).length
let u = (s.match(/u/g) || []).length

// find how many 'a's are in the string
// find how many 'e's are in the string
// find how many 'i's are in the string
// find how many 'o's are in the string
// find how many 'u's are in the string

// output the character that appears the most
// if there is a tie, use the one that is
// 'first' alphabetically

// Ex Output:
// "'a' is the most common vowel"
console.log(s)
if ((a >= e) && (a >= i) && (a >= o) && (a >= u)) {
    console.log("'a' is the most common vowel");
} else if ((e >= a) && (e >= i) && (e >= o) && (e >= u)) {
    console.log("'e' is the most common vowel");
} else if ((i >= a) && (i >= e) && (i >= o) && (i >= u)) {
    console.log("'i' is the most common vowel");
} else if ((o >= a) && (o >= e) && (o >= i) && (o >= u)) {
    console.log("'o' appears " + o + " times");
} else {
    console.log("'u' is the most common vowel");
}

let winnerCount = a;
let winnerLetter = 'a';

if (e > winnerCount) {
    winnerCount = e;
    winnerLetter = 'e';
}
if (i > winnerCount) {
    winnerCount = i;
    winnerLetter = 'i'
}
if (o > winnerCount) {
    winnerCount = o;
    winnerLetter = 'o'
}
if (u > winnerCount) {
    winnerCount = u;
    winnerLetter = 'u';
}

console.log(winnerLetter + ' appears ' + winnerCount + ' times')


