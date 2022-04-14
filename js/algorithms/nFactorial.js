

function nFactorialLoop(n) {
    var a = 1;
    for (let i = 1; i <= n; i++) {
        a *= i;
    }
    return a;
}

nFactorialLoop(4)


function nFactorial(n) {
    return n === 1 ? 1 : n * nFactorial(n - 1)
}

console.log(nFactorial(3));