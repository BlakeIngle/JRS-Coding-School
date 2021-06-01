function makeArray() {
    let arr = [];

    for (let i = 1; i <= 16; i++) {
        arr.push(i);
    }

    return arr;
}

function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

console.log(makeRandomArray())