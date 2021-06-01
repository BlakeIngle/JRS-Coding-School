function fibonacciNTimes(n) {

    var last2 = 0;
    var last1 = 1;

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            console.log(i)
            continue;
        }
        console.log(last2 + last1)
        let temp = last2
        last2 = last1;
        last1 += temp;
    }
}

function randomBetween(a, b) {

    let random = Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)

    return random;
}