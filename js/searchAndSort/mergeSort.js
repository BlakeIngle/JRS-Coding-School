function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

/**
 * Sort an array using the merge sort algorithm
 */
function mergeSort(arr) {

    /////////
    if (arr.length == 1) {
        // already sorted
        return arr;
    }
    if (arr.length == 2) {
        // then this array can be sorted
        // linear sort
        if (arr[0] > arr[1]) {
            let temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp;
        }
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    // sort each individually
    left = mergeSort(left)
    right = mergeSort(right)

    console.log(left)
    console.log(right)

    //merge them together
    return merge(left, right);
}

function merge(left, right) {
    let sorted = [];

    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        // look at the 'next' available number in one array

        if (left[i] < right[j]) {
            // left array 'next' number is smaller
            sorted.push(left[i++])
        } else {
            // right array 'next' number is smaller
            sorted.push(right[j++])
        }
    }

    if (i < j) {
        // j finished and i didn't
        for (let k = i; k < left.length; k++) {
            sorted.push(left[k])
        }
    } else {
        // i finished and j didn't
        for (let k = j; k < right.length; k++) {
            sorted.push(right[k])
        }
    }

    return sorted
}


let list = makeRandomArray();
var t0 = new Date().getTime();

list = mergeSort(list)
var t1 = new Date().getTime();


console.log(list)

console.log("Merge sort took " + (t1 - t0) + " milliseconds.")