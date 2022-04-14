function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp;
}

function insertionSort(arr) {
    let numSwaps = 0;
    let numCompare = 0;
    for (let i = 0; i < arr.length; i++) {
        // i -> index where the next smallest number will live
        // go find the smallest and put it at [i]
        let iOfSmallest = i
        for (let j = i + 1; j < arr.length; j++) {
            numCompare++;
            if (arr[j] < arr[iOfSmallest]) {
                iOfSmallest = j
            }
        } // found the index of smallest number
        swap(arr, i, iOfSmallest);
        numSwaps++;
    }

    console.log("insertion sort swapped", numSwaps, 'times')
    console.log("insertion sort compared", numCompare, 'times')
}

function bubbleSort(arr) {
    let numSwaps = 0;
    let numCompare = 0;
    var isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            numCompare++;
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
                numSwaps++;
                isSorted = false;
            }
        }
    }
    console.log("bubble sort swapped", numSwaps, 'times')
    console.log("bubble sort compared", numCompare, 'times')
}

var arr = [2, 10, 7, 5, 9, 4, 1, 6, 8, 3]

insertionSort(arr)
console.log(arr);

arr = [2, 10, 7, 5, 9, 4, 1, 6, 8, 3]
bubbleSort(arr)
console.log(arr);




arr = [2, 10, 7, 5, 9, 4, 1, 6, 8, 3]
arr.sort();
