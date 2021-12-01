var a;
var b;

a = 10 * Math.random().toFixed(1);
b = 10 * Math.random().toFixed(1);

b = b + "";

if (a < b) {
    a = a * 2;
} else if (a > b) {
    a = a - 3;
}

if (a < 0) {
    a *= -1;
}

console.log("a: " + a + "\nb: " + b)

if (a % 2 == 0) {
    // a is even
    if (b % 2 == 0) {
        // both even
        var sum = a + b;
        if (a < b) {
            a = sum;
        } else if (b < a) {
            b = sum;
        }
    } else {
        b++;
    }
} else if (b % 2 == 0) {
    a--;
}

console.log("a: " + a + "\nb: " + b)