let arr = ["Kelly", 'Kristina', "Brian"]

console.log(arr)
console.log(...arr)

function combine(...items) {
    console.log(items)
}

combine(1, "Kelly", 'Kristina', "Brian", false);

let arrCopy = [...arr, 'Chris']
console.log(arr)
console.log(arrCopy)

var obj = {
    firstName: "Blake",
    age: 25,
    favoriteColor: "purple"
}

let objCopy1 = obj;
let objCopy2 = { ...obj }
// Copy an object that is actually a separate object

obj.firstName = "BLAKE"
console.log(obj)
console.log(objCopy1)
console.log(objCopy2)


// copy an object and change a property
var copy = { ...obj, favoriteColor: 'red' }

console.log(obj)
console.log(copy)










var arr2 = ['blake', 25, 'purple']

var [firstName, age, favColor] = arr2; // destructure

console.log(firstName)
console.log(age)
console.log(favColor)


var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var [first, second, ...theRest] = arr3;

console.log(first, second, theRest);
console.log(arr3);


var book = {
    author: "Charles Dickens",
    genre: "fiction",
    title: "A Tale Of Two Cities",
}

var { title, genre, author } = book;

console.log(title);
console.log(author);
console.log(genre);

function printBookDetails({ author, title, genre }) {
    console.log(title, 'is a', genre, 'book writen by', author)
}
// these 2 methods have the same effect
// destructuring of an object can be baked into the params definition
function printBookDetails(book) {
    let { author, title, genre } = book;
    console.log(title, 'is a', genre, 'book writen by', author)
}

printBookDetails(book);