var a = [1, 2];
var b = a;
var c = [1, 2];

console.log(b == a)
console.log(c == a)

console.log(c == b)

var d = { value: 10 };
var e = d;
var f = { value: 10 };

// console.log(e == d);
// console.log(f == d);

console.log(e.value == d.value)
console.log(f.value == d.value)


// var a = [1, 2];
// var b = a;
// var c = [1, 2];

a[0] = 3;
console.log(b);


// var d = { value: 10 };
// var e = d;
// var f = { value: 10 };

d.value = 33;
console.log(e);