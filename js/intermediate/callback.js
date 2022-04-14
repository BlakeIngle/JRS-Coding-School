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




function myFunction(params) {
    console.log(params)
}


// () => { } // function literal
// // look for the => (arrow)
// (params) => {
//     console.log(params)
// } // literal functions can still define paramaters

var hw = () => {
    console.log('Hello world!');
}

hw();

/**
 * 
 * @param {*)} bar 
 */
function foo(cb) {
    cb();
}

foo(hw); // pass function by reference
foo(() => {
    console.log("This is an inline arrow function")
}); // pass in literal function


var myArr = [4, 7, 2, 7, 1];
// js array higher-order functions
var filteredArr = myArr.filter(num =>
    num == 7
);
console.log(myArr);
console.log(filteredArr);



var mappedArr = myArr.map((num) => {
    return num * num
});
console.log(myArr);
console.log(mappedArr);


///////// how the array.filter function works

myArr = [2, 7, 4, 4, 9, 1]

function filter(arr, cb) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (cb(value, i, arr)) {
            filteredArr.push(value);
        }
    }

    return filteredArr;
}

arr.filter((value) => { return true }) // literal function
filter(arr, (value) => { return true });

var myCB = (value) => { return true }
arr.filter(myCB) // reference a function
filter(arr, myCB);