// given n, find any two values a and b where
// neither a nor b contain a digit 4

function noFours(n) {
    let a = "";
    let b;

    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        if (n.charAt(i) == '4') {
            // we need to adjust something
            a += "1"
        } else {
            a += "0"
        }
    }
    console.log(a);
    a = Number(a)
    b = n - a;


    return { a: a, b: b }
}

console.log(noFours(4));
console.log(noFours(1423));
console.log(noFours(4444));
console.log(noFours(1234567890));
console.log(noFours(2844146));


function print2Checks(n) {
    var a, b;

    a = '' + n
    a = a.replace('4', 2);

    return [Number(a), n - Number(a)];
}

console.log(print2Checks(4))
console.log(print2Checks(4192384765329))
console.log(print2Checks(1234))
console.log(print2Checks(2048))