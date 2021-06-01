function removeSpaceAndExlaimation(aNewName){
    // code inside the function

    i = aNewName.indexOf('!') // find index of ! char
    aNewName = aNewName.slice(0, i) // cut out the whole string before the !
    i = aNewName.indexOf(' '); // find space character
    aNewName = (aNewName.slice(0, i)) + (aNewName.slice(i + 1)) // combine the left and right of space character
    aNewName = aNewName.charAt(0) + aNewName.slice(1).toLowerCase() // making all characters lowercase except first
    return aNewName;
}


// for(let i = 0; i < 4; i++) {
//     console.log(i + " MesSAGe!")
//     console.log(removeSpaceAndExlaimation(i + " MesSAGe!"));
// }




var myName = "Blake Ingle!"
"Blake" + " Ingle" // add strings together
"Blake " + 7

myName.indexOf("I") // find characters in a string
myName.toUpperCase() // make all characters uppercase (a - Z)















// for(let i = 65; i < 123; i++) {
//     console.log(i)
//     console.log(String.fromCharCode(i))
// }


/**
 * Write a function that takes a single character 'A-Z' and
 * and returns that uppercase character
 * Ex: send 'g' -> return 'G'
 * @param {*} c - the character to convert
 */
function toLower(c) {
    var myCharCode = c.charCodeAt(0) // get code of character - 66
    myCharCode = myCharCode + 32
    return String.fromCharCode(myCharCode) // get character of a code
}


console.log(toLower('B')) // expect: 'b'


"blake@harborec.com" == "Blake@harborec.com"


// write a function that loops and prints this message on the console



//  *
//      *
//          *
//              *

// for(let i = 0; i < 4; i++) {
//     console.log("*")
// }


// use \t for tabs