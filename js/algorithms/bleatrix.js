function bleatrix(n) {
    let digitsSeen = []
    for (let i = 0; i <= 9; i++) {
        digitsSeen.push(false)
    }
    for (let i = 1; i <= 100; i++) {
        let num = Number(n * i).toString()
        for (let char of num) {
            digitsSeen[char] = true;
        }
        let allSeen = true;
        for (let seen of digitsSeen) {
            if (!seen) {
                allSeen = false;
                break;
            }
        }
        if (allSeen) {
            return n * i;
        }
    }
    return "INSOMNIA"
}

console.log(bleatrix(2))
console.log(bleatrix(1692))