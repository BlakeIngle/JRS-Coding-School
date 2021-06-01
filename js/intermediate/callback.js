const myList = [1, 2, 3];


function filter(arr, cb) {
    let storage = [];

    // compare each value in arr with isEven
    //if true
    //add to storage
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            storage.push(arr[i]);
        }
    }

    return storage;
}

function isEven(n) {
    return n % 2 == 0;
}

(n) => {
    return n % 2 == 0;
}

let newList = filter(myList, (n) => {
    return n % 2 == 0;
});

console.log(newList)