// var name

function areaOfCircle(radius) {
    var name = "hello"
    //im going to return a number
    //do something
    var area = Math.PI * radius * radius // calculated area from the given parameter
    return area;
}

console.log(areaOfCircle(2));





// var area = areaOfCircle(4)
// console.log(area)



// // write a program that has a function called areaOfCircle
// // that function has one paramter called r
// // the function calculates the area of a circle with
// // radius r and returns the area

// // area = Math.PI * r * r

// // call that function once by sending one parameter with the value 4
// // log that value to the console

// // write a loop that calls the function
// // for every int 0-9 and logs the value to the console


// a = 5;
// console.log(a)
// console.log(a.toString())
// console.log(a)







function removeSpaceAndExlaimation(aNewName) {
    // code inside the function

    i = aNewName.indexOf('!') // find index of ! char
    aNewName = aNewName.slice(0, i) // cut out the whole string before the !
    i = aNewName.indexOf(' '); // find space character
    aNewName = (aNewName.slice(0, i)) + (aNewName.slice(i + 1)) // combine the left and right of space character
    aNewName = aNewName.charAt(0) + aNewName.slice(1).toLowerCase() // making all characters lowercase except first
    return aNewName;
}


for (let i = 0; i < 4; i++) {
    console.log(i + " MesSAGe!")
    console.log(removeSpaceAndExlaimation(i + " MesSAGe!"));
}



// hw = "Hello world!";


// hw.concat()


function functionName() {
    // first way
}

functionNameArrow =
    () => {
        // second way
    }


let list1 = [1, 2, 3]
let list2 = [4, 5, 6]
let list3 = [7, 8, 9]

function findSumOfArray(list, foo) {
    var sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum = sum + list[i]
    }
    console.log(sum)
}


function printRandom() {
    console.log(Math.random());
}

printRandom();
findSumOfArray(list1);
findSumOfArray(list2);
findSumOfArray(list3);
findSumOfArray([]);
findSumOfArray(234);
findSumOfArray();