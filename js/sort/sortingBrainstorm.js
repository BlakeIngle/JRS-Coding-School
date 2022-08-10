function makeRandomArray(size, max) {

    if (!size) {
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

var arr = makeRandomArray(100, 100);

quickSort(arr);
console.log(arr);


function quickSort(arr) {

    const qSort = (arr, start, end) => {

        // if only 1 item
        if (start >= end) {
            return;
        } else if (end == start + 1) {
            if (arr[start] > arr[end]) {
                // swap them
                var temp = arr[start]
                arr[start] = arr[end]
                arr[end] = temp;
            }
            return;
        }

        var pivot = end;
        var target = start;
        for (let i = start; i < end; i++) {
            if (arr[i] < arr[pivot]) {

                var temp = arr[target]
                arr[target] = arr[i]
                arr[i] = temp;

                target++;
            }
        }

        // swap pivot into the target index
        var temp = arr[pivot]
        arr[pivot] = arr[target]
        arr[target] = temp;

        qSort(arr, start, target - 1);
        qSort(arr, target + 1, end);
    }

    qSort(arr, 0, arr.length - 1);
}



console.log(makeRandomArray(10))