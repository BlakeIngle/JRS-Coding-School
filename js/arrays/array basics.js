// an array is a collection of data

otherArr = [1, 2, 3];
arr = [];

for (var i = 0; i < 10; i++) {
    //push a new value to the array
    arr.push(i);
}

console.log(arr)

//print every value in the array on a new line

for (let i = 0; i < arr.length; i++) {
    //do something for as many values are in the array
    //or do something with every value of the array
    console.log(arr[i])
}




arr[0] = 100;

console.log(arr)


//declare
arr = [];
//push
arr.push(1, 2, 3);
//reference
arr[0]
    //new assignment
arr[0] = 100

console.log(arr)

let twoDArr = [
    [],
    [],
    []
]