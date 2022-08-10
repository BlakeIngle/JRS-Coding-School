let today = "Wednesday";
let isRaining = true;

if ((today == "Wednesday") && !isRaining) {
    console.log("You should go on a walk")
}

if (today == "Wednesday") {
    if (isRaining) {
        console.log("You should to the gym")
    } else {
        console.log("You should go on a walk")
    }
}


let a = 30;
let b = 8;
let c = 2;

// Output the values of a and b
// in 'non-descending' order

// EX:
// '3, 4'
// '5, 5'
// '1, 900'

// Output the values of a and b and c
// in 'non-descending' order

// EX:
// '3, 4, 5'
// '5, 5, 6'
// '5, 6, 6'
// '1, 900, 9000'


if ((a <= b) && (b <= c)) {
    console.log(`${a}, ${b}, ${c}`);
} else if ((a <= c) && (c <= b)) {
    console.log(`${a}, ${c}, ${b}`);
} else if ((b <= a) && (a <= c)) {
    console.log(`${b}, ${a}, ${c}`);
} else if ((b <= c) && (c <= a)) {
    console.log(`${b}, ${c}, ${a}`);
} else if ((c <= a) && (a <= b)) {
    console.log(`${c}, ${a}, ${b}`);
} else if ((c <= b) && (b <= a)) {
    console.log(`${c}, ${b}, ${a}`);
}


if (a < b) {
    if (b < c) {
        // a b c
    } else if (c < a) {
        // c a b
    } else {
        // a c b
    }
}

// a b c *
// a c b *

// b a c
// b c a

// c a b *
// c b a




// a b c * *
// a c b * *
// c a b *