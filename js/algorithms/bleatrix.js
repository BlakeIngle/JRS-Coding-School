function bleatrix(n) {
    let digitsSeen = new Array(10).fill(false);
    topLoop: for (let i = 1; i <= 10; i++) {
        let num = Number(n * i).toString()
        for (let char of num) {
            digitsSeen[char] = true;
        }

        for (let seen of digitsSeen) {
            if (!seen) {
                continue topLoop;
            }
        }
        // all seen
        return i * n;
    }
    return "INSOMNIA"
}

console.log(bleatrix(2))
console.log(bleatrix(1692))