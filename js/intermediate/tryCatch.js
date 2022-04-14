function sumInArray(myArr) {

    let sum = 0;
    for (let value of myArr) {
        sum += value;
    }
    return sum;
}

function logSum(myObj) {
    console.log("myObj.myArr = " + myObj.myArr)

    try {
        let sum = sumInArray(myObj.myArr)
        console.log("Sum of array, " + myObj.myArr + " is: " + sum)
    } catch (err) {
        console.error(err + " :: " + myObj.myArr + " is not iterable. Cannot find a sum.")
    } finally {
        console.log("Finally!")
    }
}

console.log("Starting:")

myObj = { myArr: [1, 3, 5, 7, 9] }

logSum(myObj);
logSum(5);
logSum([1, 2, 3])

console.log("Complete!")