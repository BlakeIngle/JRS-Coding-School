var myArr = [
    [6, 14, 99],
    [6, 15, 98],
    [7, 14, 98]
];
/*
    0, 0    0, 1    0, 2
    1, 0    1, 1    1, 2
    2, 0    2, 1    2, 2
*/

for (let i = 0; i < myArr.length; i++) {
    for (let j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
}

for (let arr of myArr) {
    for (let value of arr) {
        console.log(value);
    }
}

for (let i in myArr) {
    for (let j in myArr[i]) {
        console.log(myArr[i][j])
    }
}


var objArr = [
    { name: "Tortoise, indian star", weight: 6.7, gender: "M" },
    { name: "African snake (unidentified)", weight: 41.1, gender: "M" },
    { name: "Impala", weight: 11.3, gender: "M" }
];

for (let i in objArr) {
    console.log(`Animal Name: ${objArr[i].name}\nWeight: ${objArr[i].weight}\n`)
}
