
let s = "Maccaroni and cheese";

console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(s.length - 1));

console.log(s.includes('car'));

console.log(s.indexOf('e'));
console.log(s.indexOf(' '));
console.log(s.indexOf('a'));
console.log(s.lastIndexOf('a'));

console.log(s.toUpperCase());
console.log(s.toLowerCase());

//    count how many 'e's there are
console.log((s.match(/e/g) || []).length)


console.log(s.replace(/e/g, '-'))
console.log(s.slice(4))
console.log(s.slice(4, 10))
console.log(s.split(' '))
