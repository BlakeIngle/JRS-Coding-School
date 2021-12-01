function makeArray() {
    let arr = [];

    for (let i = 1; i <= 16; i++) {
        arr.push(i);
    }

    return arr;
}

/**
 * Returns the index in the array of a given value
 * @param {number} value - the value to find
 * @param {number[]} arr - the array to search in
 * returns the index of the found value (-1 if not found)
 */
function linearSearch(value, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            // this is the found value
            return i;
        }
    }

    return -1;
}

let arr = makeArray()
console.log(linearSearch(7, arr))
console.log(linearSearch(25, arr))
console.log(linearSearch(16, arr))