var arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    console.log(i, value)
}
///////////////////////////
console.log("--------------")
///////////////////////////
for (let value of arr) {
    console.log(value)
}

let sum = 0;
for (let value of arr) {
    sum += value;
}
console.log(sum);

var students = ['Brian', "Chris", 'Kelly', 'Kristina', 'Nick', "Tommy"]

for (let student of students) {
    console.log(student);
}
console.log(students);

/**
 * pros:
 *      less code / shorter / faster to type
 *      less room for error
 * cons:
 *      no access to the index
 *      no control
 */