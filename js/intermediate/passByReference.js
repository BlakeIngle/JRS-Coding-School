let a = 4;

function changeA(a) {
    a = 5
    return a;
}

changeA(a)
console.log("a", a)

let b = {
    value: 4
}

function changeB(b) {
    b.value = 5;
}

changeB(b)
console.log("b", b)


let c = {
    value: 4
}

function changeC(c) {
    c = {
        newValue: 4
    }
}

changeC(c)
console.log("c", c)





var d = { value: 7 }
var e = d;

e.value = 8;

console.log(d);