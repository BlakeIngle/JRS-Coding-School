/**
 * Implement your code for the following functions. 
 * Do not change any code outside of the designated lines.
 * 
 * After implementing your code, execute your file using the node command.
 * 
 * The expected output of this program will be in the following format:
 * 
 * ...
 * true is a boolean
 * 123 is a number
 * "294" is a string
 * ...
 * 
 */

var arr = makeArray(100);

for (let value of arr) {
    // this for loop will iterate through every value in the array

    // write code that will output the 'value' variable
    // as well as the datatype of 'value'
    // the datatypes will be either number, string, or boolean
    // example output: 
    // if value is the number 294:
    // "294 is a number"
    // if value is the boolean true:
    // "true is a boolean"

    /************************************/
    // CODE GOES HERE //

    // hint: google search the 'typeof' operator
    /************************************/
}

function makeArray(length) {
    var data = [];
    for (let i = 0; i < length; i++) {
        let r = Math.floor(Math.random() * 3);
        switch (r) {
            case 0: data.push(Math.floor(Math.random() * 1000));
                continue;
            case 1: data.push(Math.floor(Math.random() * 1000) + "");
                continue;
            case 2: data.push(Math.random() < 0.5 ? true : false);
                continue;
        }
    }

    return data;
}