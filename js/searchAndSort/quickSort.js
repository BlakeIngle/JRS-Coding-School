function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}


function quickSort(arr, start, pivot) {
    if (start >= pivot) { return; }

    let i = start;
    for (let j = start; j < pivot; j++) {
        if (arr[j] < arr[pivot]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;

            i++;
        }
    }
    let temp = arr[i];
    arr[i] = arr[pivot];
    arr[pivot] = temp;

    quickSort(arr, start, i - 1) // left side
    quickSort(arr, i + 1, pivot) // right side
}

let list = makeRandomArray();

var t0 = new Date().getTime();
quickSort(list, 0, list.length - 1)
var t1 = new Date().getTime();

console.log(list)
console.log("Quick sort took " + (t1 - t0) + " milliseconds.")