function makeRandomArray() {
    let arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

/**
 * Sort the values in the array ascending order
 * @param {number[]} arr - the array to sort
 */
function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        // find the smallest and put it at i
        let indexOfLowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfLowest]) {
                // new lower value was found
                indexOfLowest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfLowest]
        arr[indexOfLowest] = temp;
    }

    return arr;
}

let list = makeRandomArray();
var t0 = new Date().getTime();

selectionSort(list)
var t1 = new Date().getTime();


console.log(list)

console.log("Selection sort took " + (t1 - t0) + " milliseconds.")