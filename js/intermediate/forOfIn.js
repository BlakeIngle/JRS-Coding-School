let myList = [1, 2, 3, 4, 5];











for (let n of myList) {
    console.log(n)
}



myList = [{ name: 'Alex' }, { name: 'Jazmin' }, { name: 'Tanner' }, { name: 'Soufaine' }]



for (let n of myList) {
    // console.log(n)
}

for (let i in myList) {
    console.log(i)
}

myList.forEach((value) => {
    console.log(value)
});


function myFunc1(v) {
    console.log(v);
    return v;
}

let myFunc2 = (v) => {
    console.log(v)
}

myFunc1(1)
myFunc2(2)

var myList = [2, 4, 6, 5, 9, 1, 5, 6, 6, 7, 2]


// rewrite the sum of an array function again
// but use for (let n of arr) {}

function sumOfArr(arr) {
    var sum = 0;
    for (let n of arr) {
        sum += n;
    }
    return sum;
}



console.log(sumOfArr(myList))