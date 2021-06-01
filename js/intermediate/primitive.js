let a = 5; // a -> 2000 -> 5
let b = a; // b -> 2001 -> 5
a = 4; // memory at a -> 2000 -> now = 4
console.log(a, b);
// 4 5
// primative data types








let c = [5]; // c -> 3000 -> [0] -> 3001 -> 5
let d = c; // d -> 4000 -> 3000
c[0] = 4; // c -> 3000 -> [0] -> 3001 -> now = 4

console.log(c[0], d[0]);
// 4 4          // d -> 3000 -> [0] -> 3001 -> 4
// non primative data types



let e = [4]
let f = e;
e = [4]; // c -> 5000 -> [0] -> 5001 -> 4
e = new Object() // not a copy





let first = {
    arr: [4]
}
let second = first

first.arr[0] = 5

console.log(first)
console.log(second, "\n")



second = {
    arr: [4]
}

first.arr[0] = 5

console.log(first)
console.log(second, "\n")


first.arr[0] = 4;

second = {
    arr: first.arr
}

first.arr[0] = 5

console.log(first)
console.log(second, "\n")


first.arr[0] = 4;

second = {
    arr: copyArray(first.arr)
}

first.arr[0] = 5

console.log(first)
console.log(second, "\n")


function copyArray(arrToCopy) {
    let newArr = [];
    for (let value of arrToCopy) {
        newArr.push(value)
    }
    return newArr
}


let third = {
    arr: [1]
}

let pointer = third


pointer.arr[0] = 9

// console.log(third)


pointer = first
pointer.arr[0] = 55
pointer = second
pointer.arr[0] = 77
pointer = third
pointer.arr[0] = 99

console.log(first)
console.log(second)
console.log(third)