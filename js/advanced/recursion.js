// 1. - write a function (non recursive) that will calculate
// and return the value of n! (n factorial)
// ex: 5! = 5 * 4 * 3 * 2 * 1

// 2. - write a *recursive* function that will calculate
// and return the value of n!




function nFactorialNR(n) {
    n = Math.floor(n)
    if (n < 1) {
        return 0;
    }

    for (let i = n - 1; i > 0; i--) {
        n *= i
    }

    return n;
}

console.log(nFactorialNR(5))
console.log(nFactorialNR(9))
console.log(nFactorialNR(2))
console.log(nFactorialNR(2.5))
console.log(nFactorialNR(1))
console.log(nFactorialNR(0))
console.log(nFactorialNR(-4))

function nFactorial(n) {
    if (n === 1) {
        return n;
    }
    return nFactorial(n - 1) * n
}
console.log(nFactorial(5))
console.log(nFactorial(9))
console.log(nFactorial(2))
console.log(nFactorial(2.5))
console.log(nFactorial(1))
console.log(nFactorial(0))
console.log(nFactorial(-4))