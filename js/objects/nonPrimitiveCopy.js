// pass to function
let myArr = [];

function populate(arr) {
    arr.push(7, 11);
}

populate(myArr);
console.log(myArr);

// bad copy
myArr = [2, 11, 1, 8, 7];
let arrCopy = myArr;
console.log(myArr, arrCopy);
myArr[2] = 10;
console.log(myArr, arrCopy);

// good copy
myArr = [2, 11, 1, 8, 7]
arrCopy = myArr.slice();

myArr[5] = 80

console.log(myArr, arrCopy);

// 'deep' copy
myArr = [2, 11, 1, 8, [7], { key: 'value' }]
arrCopy = [];
// look at each value
for (let i = 0; i < myArr.length; i++) {
    let value = myArr[i];
    if (typeof value == 'object') {
        if (Array.isArray(value)) {
            let clone = value.slice();
            arrCopy.push(clone);
        } else {
            let clone = {};
            Object.assign(clone, value);
            arrCopy.push(clone);
        }
        // either copy an obj
        // or copy an arr
    } else {
        arrCopy.push(value);
    }
}
// and if the value is non-primitive,
// it also needs to be copied

myArr[4][0] = 70;
console.log(myArr, arrCopy);