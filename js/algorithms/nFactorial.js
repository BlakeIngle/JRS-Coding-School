

// function nFactorialLoop(n) {
//     var a = 1;
//     for (let i = 1; i <= n; i++) {
//         a *= i;
//     }
//     return a;
// }

// nFactorialLoop(4)


// function nFactorial(n) {
//     return n === 1 ? 1 : n * nFactorial(n - 1)
// }

// console.log(nFactorial(3));



function nFactorial(n) {
    let answer = 1;

    for (let i = 1; i <= n; i++) {
        answer = answer * i;
    }

    return answer;
}


let n = 5;
nFactorial(n - 1) * n;

console.log(nFactorial(5) == (nFactorial(4) * 5))


function nFactorial(n) {
    if (n <= 1) {
        return n;
    } else {
        return n * nFactorial(n - 1);;
    }
}

let fac5 = nFactorial(5);

console.log('5! = ', fac5);

// doSomething - n = 1 - line42
// doSomething - n = 0 - line42




let DIETS = {
    HERBIVORE: 'herbivore',
    CARNIVORE: 'carnivore',
    OMNIVORE: 'omnivore',
}

DIETS.HERBIVORE



