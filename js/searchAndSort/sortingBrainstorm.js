
function quickSort(arr, start, end) {

    if (start >= end) {
        return;
    }
    var pivot = arr[end];

    var j = start;// index to put next number smaller than pivot
    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            // then swap arr[i] arr[j]
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
        }
    }
    var temp = arr[j];
    arr[j] = arr[end];
    arr[end] = temp;

    quickSort(arr, start, j - 1) // left sub array
    quickSort(arr, j + 1, end) // right sub array
    return arr;
}

function makeRandomArray(size, max) {

    if (!size) {
        console.log(!!size)
        console.log(!!null)
        size = 100;
    }
    if (!max) {
        max = 100;
    }

    var arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.ceil(Math.random() * max));
    }
    return arr;
}

var arr = makeRandomArray();
console.log(quickSort(arr, 0, arr.length - 1))
