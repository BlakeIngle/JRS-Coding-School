var myArr = [2, 9, 6, 1, 4, 0, 5, 7, 3, 8];

for (let i = 0; i < myArr.length; i++) {
    var value = myArr[i];
    console.log(value);
}

for (let v of myArr) {
    console.log(v);
}

for (let i in myArr) {
    myArr[i] *= 2;
    console.log(myArr[i])
}

