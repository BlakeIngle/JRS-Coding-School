
var a = [];

var b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a.push(...b)
a.push(...b.slice(1, b.length - 1))


console.log(a)



function printSpread(...a) {
    for (let v of a) {
        console.log(v)
    }
}

printSpread(...b)