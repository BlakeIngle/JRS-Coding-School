
function spread(a, ...items) {
    console.log(a, items)
}

spread(1, 2, 3);

arr = [1, 2, 3]

console.log(arr)
console.log(...arr)

var obj = {
    firstName: "Blake",
    age: 25,
    favoriteColor: "purple"
}

var copy = { ...obj, favoriteColor: 'red' }

console.log(obj, copy)

var arr2 = ['blake', 25, 'purple']

var [firstName, age, favColor] = arr2;

console.log(firstName, age, favColor)

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var [first, second, ...theRest] = arr3;

console.log(first, second, theRest);



var book = {
    title: "A Tale Of Two Cities",
    author: "Charles Dickens",
    genre: "fiction"
}

var { title, author, genre } = book;

book.title === title;
console.log(title, author, genre)