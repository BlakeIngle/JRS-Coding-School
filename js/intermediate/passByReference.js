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
        value: 5
    }
}

changeC(c)
console.log("c", c)