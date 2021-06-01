function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 1000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

/**
 * Sort an array with the insertion sort algorithm
 * @param {number[]} arr 
 */
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                pushOverFromTo(j, i, arr)
            }
        }
    }
}

function pushOverFromTo(a, b, arr) {
    let temp = arr[b];

    if (a == b) {
        return;
    }
    for (let i = b; i > a; i--) {
        arr[i] = arr[i - 1]
    }
    arr[a] = temp;
}

let list = makeRandomArray();
var t0 = new Date().getTime();

insertionSort(list)
var t1 = new Date().getTime();


console.log(list)

console.log("Insertion sort took " + (t1 - t0) + " milliseconds.")