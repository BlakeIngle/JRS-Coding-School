"";
true;
5;
[];
// var obj = {};






() => { }; // funciton literal






var funcName = (param1, param2) => {
    console.log(param1, param2)
}

funcName = () => {
    console.log("Goodbye World!")
}

funcName("Hello", "World!");


var a = 5;
a = 4
console.log(a)




var myArr = [1, 2, 3]

myArr.forEach((value, i) => {
    console.log(value + myArr[i])
});

parentFunction();

function parentFunction(callbackfn) {
    callbackfn();
}