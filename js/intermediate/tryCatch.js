function sumInArray(myArr) {
    // undefined
    let sum = 0;
    for (let value of myArr) {
        sum += value;
    }
    return sum;
}

function logSum(myObj) {
    console.log("myObj.myArr = " + myObj.myArr)

    try {
        console.log("Sum of array, " + myObj.myArr + " is: " + sumInArray(myObj.myArr))
    } catch (err) {
        console.error(err + " :: " + myObj.myArr + " is not iterable. Cannot find a sum.")
    } finally {
        console.log("Finally!")
    }

}

console.log("Starting:")

myObj = { myArr: [1, 3, 5, 7, 9] }

logSum(myObj);
logSum([1, 2, 3])

console.log("Complete!")