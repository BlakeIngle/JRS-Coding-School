



a = [2, 6, 9, 4, 6, -7, -3, -4, -3]

// return the sum of all positive odd values in the array
// now instead of returning the sum, return the average of 
// all positive odd values

var sum = 0;
var count = 0; // the number of numbers added to the sum

for (let i = 0; i < a.length; i++) { // look at all values in the array
    if (a[i] > 0 && a[i] % 2 == 1) { // if positive and even
        sum += a[i] // then add to the sum
        count++ // increment counter
    }
}

var avg = sum / count; // but now array length would be the wrong number

// console.log(sum);





var number = 0;
while (number < 20) {
    number++;
    if (number == 10 || number == 11) {
        continue;
    }
    console.log(number)
}

console.log("after the loop")


var sum = 0;
var number = 0;

while (number < 20) {
    ////////// continue
    number++;
    sum += number;

    if (sum >= 100) {
        break;
    }
}
console.log("The sum is: " + sum)
console.log("The number is: " + number)




for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {

        if (i * j > 2) {
            break;
        }

        console.log(i * j)
    }
    console.log(i)
}