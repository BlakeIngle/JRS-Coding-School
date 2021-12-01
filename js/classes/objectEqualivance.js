var a = [1, 2];
var b = a;
var c = [1, 2];

// console.log(b == a)
// console.log(c == a)

// console.log(c == b)

var d = { value: 10 };
var e = d;
var f = { value: 10 };

// console.log(e == d);
// console.log(f == d);

// console.log(e.value == d.value)
// console.log(f.value == d.value)

/**
 * var a = [1, 2];
 * var b = a;
 * var c = [1, 2];
 */

// a[0] = 3;
// console.log(b);

/**
 * var d = { value: 10 };
 * var e = d;
 * var f = { value: 10 };
 */

d.value = 33;
console.log(e);


var g = { items: [1, 2, 3] }

var h = g;
var { items } = g;

var i = { items: g.items };
var j = { ...g };

console.log(g.items == i.items)
console.log(items == j.items)



function deepCopy(obj) {
    let copy = { ...obj }
    copy.items = [...items];
}


class Circle { }

var c1 = new Circle(4);
var c2 = c1;
var c3 = new Circle(4);
// same deal
// c1===c2; -> true
// c3===c1; -> false