
function isEven(number) {
    return number % 2 == 0 //true or false 
}

function isOdd(number) {
    // have to call the isEven function
    return !(isEven(number))
}