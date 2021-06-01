// C = cost of farm
// F = rate of farm (F=4 -> +4 cookies / s)
// X = total goal
// 

function fastestPossibleCookie(C, F, X) {
    let t = 0;
    let rate = 2; // default 2/s

    for (let i = 0; true; i++) {
        if (X / rate < ((C / rate) + (X / (rate + F)))) {
            return t + (X / rate);
        } else {
            console.log("faster to farm")
            t += C / rate;
            rate += F
        }
    }
}


console.log(fastestPossibleCookie(2000, 500, 4))
console.log(fastestPossibleCookie(30, 1, 2))
console.log(fastestPossibleCookie(30, 2, 100))
console.log(fastestPossibleCookie(30.5, Math.PI, 1999.1999))