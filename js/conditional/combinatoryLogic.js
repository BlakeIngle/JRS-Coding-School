
console.log(true && true); // "and and"

console.log(true && true); // true
console.log(true && false);// false
console.log(false && true);// false
console.log(false && false);// false

console.log(true || false); // "or or"

console.log(true || true); // true
console.log(true || false);// true
console.log(false || true);// true
console.log(false || false);// false

console.log(false || true || false);

console.log(true && true && false);

console.log(false && true || false); // false

console.log(true || (true && false))// false?

console.log((true || false) || !(false || !false));

// XOR 
console.log(false ^ false)
console.log(true ^ false)
console.log(false ^ true)
console.log(true ^ true)
