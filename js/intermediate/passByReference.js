let a = 4;

function changeA(a) {
    a = 5
    return a;
}

changeA(a)
console.log("a", a)

let b = {
    n: 4
}
function changeB(b) {
    b.n = 5;
}

changeB(b)
console.log("b", b.n);

let c = {
    foo: 4
}
function changeC(c) {
    c = {
        bar: 4
    }
}

changeC(c)
console.log("c", c)





var d = { n: 7 }
var e = d;

e.n = 8;

console.log(d.n);


let f = [5, 2, 5, 9];

let changeF = (g) => {
    g[0] = 7;
}

changeF(f);
console.log(f[0]);