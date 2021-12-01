
var myArr = [2, 9, 6, 1, 4, 0, 5, 7, 3, 8];

var i = 0;
while (i < myArr.length) {
    if (myArr[i] == 7) {
        i++;
        continue;
    }
    myArr[i] *= 2;
    i++;
}

console.log(myArr);