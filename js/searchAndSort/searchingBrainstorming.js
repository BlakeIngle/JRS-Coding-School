function makeRandomArray(max) {

    if (!max) {
        max = 50;
    }

    var arr = [];
    var v = 0;

    while (v <= max) {
        arr.push(v);
        if (Math.random() < 0.2) {
            v++;
        }
    }

    return arr;
}

function binarySearch(value, arr) {

    if (arr == null) {
        return;
    }

    var min = 0; // lower bounds of the searching area
    var max = arr.length - 1; // upper bounds of the searching area
    var mid; // index to look at

    while (true) {
        if (max < min) {
            return -1;
        }
        // look at the middle of the array
        mid = Math.floor((min + max) / 2);

        // if value is found return
        if (arr[mid] == value) {
            // we found it !!!
            return mid;
        } else if (value < arr[mid]) {
            // if value is less than the middle
            // now search the left half
            max = mid - 1;
        } else {
            // else if the value is greater than the middle
            // now search the right half
            min = mid + 1;
        }
    }


}

let arr = makeRandomArray(25);
console.log(arr);


console.log(binarySearch(15, arr));
console.log(binarySearch(-1, arr));
console.log(binarySearch("a", arr));
console.log(binarySearch(null, arr));
console.log(binarySearch());
console.log(binarySearch(3, []));
