"";
true;
5;
[];
// var obj = {};





() => { }; // funciton literal






var funcName = (param1, param2) => {
    console.log(param1, param2)
}

funcName("Hello", "World!");

funcName = () => {
    console.log("Goodbye World!")
}

funcName();




var myArr = [2, 11, 1, 8, 7]

myArr.forEach((n, i) => {
    console.log(n, i);
});


function parentFunction(cb) {
    for (let i = 0; i < 10; i++) {
        cb();
    }
}

parentFunction(() => {
    console.log("i'm in the cb")
});



console.log(myArr.filter(n => n % 2 == 1))
