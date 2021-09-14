
exports.quickSort = (arr, start, pivot) => {
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
    return null
}

exports.makeRandomArray = () => {
    let arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

exports.sumInArray = (arr) => {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}