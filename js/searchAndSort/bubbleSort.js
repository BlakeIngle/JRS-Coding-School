function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
}

let list = makeRandomArray()

var t0 = new Date().getTime();

bubbleSort(list)
var t1 = new Date().getTime();


console.log(list)

console.log("Bubble sort took " + (t1 - t0) + " milliseconds.")