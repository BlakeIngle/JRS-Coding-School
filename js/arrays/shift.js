var arr = [2, 10, 7, 5, 9, 4, 1, 6, 8, 3];

function insert(arr, value, j) {
    let temp = arr[arr.length - 1];
    // shift all values from [j] -> [length -1] over one
    for (let i = arr.length - 1; i > j; i--) {
        arr[i] = arr[i - 1];
    }
    arr[j] = value;
    arr.push(temp);
}

console.log(arr);
insert(arr, 11, 3);
console.log(arr);