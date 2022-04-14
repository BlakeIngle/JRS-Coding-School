var myArr = [3, 6, 32, 78, 9]

// find the sum of all values in the array
var sum = 0;

for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    sum = sum + element;
} // sum has been calculated at this point

console.log(sum);
var avg = sum / myArr.length
console.log(avg)


// find the product of all values in the array
var product = 1;

for (let i = 0; i < myArr.length; i++) {
    let element = myArr[i];
    product *= element;
} // sum has been calculated at this point

console.log(product);