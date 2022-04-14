// let a = 5; // a -> 2000 -> 5
// let b = a; // b -> 2001 -> 5
// a = 4; // memory at a -> 2000 -> now = 4
// console.log(a, b);
// // 4 5
// primative data types

let a = 5;
let b = 6;
console.log(a, b) // 5, 6

a = 4;
console.log(a, b) // 4, 6

a = b;
b = 1;
console.log(a, b) // 6, 1

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]
console.log(arr1)
console.log(arr2)

arr1 = arr2
arr2 = [6, 7, 8]
console.log(arr1) // 3, 4, 5
console.log(arr2) // 6, 7, 8

arr1 = arr2
arr2[0] = 16;
arr1[1] = 17;
console.log(arr1) // 16, 17, 8
console.log(arr2) // 16, 17, 8



function add2(n) {
    n = n + 2
    return n;
}

// a -> 6
add2(a);
console.log(a); // 6
a = add2(a)
console.log(a); // 8



function add2Arr(myArr) {
    myArr[0] = myArr[0] + 2;
}
// 16, 17, 8
add2Arr(arr1)
console.log(arr1) // 18, 17, 8




function copyArrayBadWay(arr) {
    let newArr = arr;
    return newArr;
}
// arr1 - 18, 17, 8
// arr2 - 18, 17, 8
arr2 = copyArrayBadWay(arr1);
arr1[0] = 99;
console.log(arr1) // 99, 17, 8
console.log(arr2) // 99, 17, 8



arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

function copyArray(arr) {
    let newArr = [];
    for (let value of arr) {
        newArr.push(value)
    }
    return newArr;
}

arr2 = copyArray(arr1);
console.log(arr2) // 1, 2, 3
arr1[0] = 7
console.log(arr1) // 7, 2, 3
console.log(arr2) // 1, 2, 3

var car1 = {
    make: 'Scion',
    model: 'iA'
}

let car2 = car1;
car1.make = "Toyota"
console.log(car1, car2)
