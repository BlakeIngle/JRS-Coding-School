
function hw() {
    console.log("Hello world!")
}

hw()
hw()





function add2(n) {
    var x
    x = n + 2;
    console.log(n + " + 2 = " + x)
}

var a = 3;
var b = 5;

add2(7)
add2(b)




// write a function that will 
// print the result of 5+6+7+8+9+10

function addNumbers() {
    console.log(5 + 6 + 7 + 8 + 9 + 10);
}

// write a function the prints the perimeter
// of a rectangle with side lengths 3 and 5
function perimeterOfRectangle() {
    console.log((5 * 2) + (3 * 2))
}





// write a function the prints the perimeter
// of a rectangle with a given width and height
function perimeterOfRect(width, height) {
    var p = (width * 2) + (height * 2)
    return p
}











var c = perimeterOfRect(45, 100)

console.log("p is: ", c)