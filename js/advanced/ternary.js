
var a;
var b = false;

if (b) {
    a = 1;
} else {
    a = 2;
}





if (!b) {
    console.log("not raining")
} else {
    console.log("raining")
}





var arr1 = [1, 3, 5]
var arr2 = [2, 4, 6]
var merge = []

if (arr1[0] < arr2[0]) {
    merge.push(arr1[0])
} else {
    merge.push(arr2[0])
}


// if (b) {
//     a = 1;
// } else {
//     a = 2;
// }

a = (b ? 1 : 2);

// if (arr1[0] < arr2[0]) {
//     merge.push(arr1[0])
// } else {
//     merge.push(arr2[0])
// }

merge.push(arr1[0] < arr2[0] ? arr1[0] : arr2[0])


// if (!b) {
//     console.log("not raining")
// } else {
//     console.log("raining")
// }




console.log(b ? "raining" : "not raining")









var raining = true;
console.log(`It is ${!raining ? "not " : ""} raining in Ohio.`)

// console.log(!raining ? "It is not raining in Ohio." : "It is raining in Ohio.")









// (op1 ? op2 : op3)

// operand1 is some boolean condition 
// -> evaluated to true or false

// the output of the expression is either operand2 or operand3
// if   op1 is true  -> op2 is the value
// else op1 is false -> op3 is the value
