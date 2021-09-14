function fibonacciNTimes(n) {

    var last2 = 0;
    var last1 = 1;

    for (let i = 0; i < n; i++) {
        if (i < 2) {
            console.log(i)
            continue;
        }
        console.log(last2 + last1)
        let temp = last2
        last2 = last1;
        last1 += temp;
    }
}

function randomBetween(a, b) {

    let random = Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)

    return random;
}

// 1) Write a function that displays the result of 5+6+7+8+9+10.
console.log(5 + 6 + 7 + 8 + 9 + 10)
// 2) Write a function that returns the perimeter of a
// rectangle with a width of 5 and a height of 8.
console.log(5 * 2 + 8 * 2);
// 3) Write a function that converts 83deg fahrenheit to celcius.
console.log((83 - 32) / 1.8);
// 4) Write a function that converts 30deg celcius to fahrenheit.
console.log(32 * (9 / 5) + 32);
// 5) Write a function that calculates the total bill including 
// a 25% tip on a bill of $15.84
console.log(15.84 * 1.25);
// 6) Write a function that converts 45278962345 seconds to years
// rounded to 1 decimal.
var years = 45278962345 / (60 * 60 * 24 * 365);
console.log(years.toFixed(1));
// 7) Write a function that generates a random integer (rounded number) 
// from 1-10
var rand = Math.random() * 10;
rand = Math.ceil(rand) + 10;

console.log(rand);

// 8) Write a function that prints a message if 
// a random number (that is generated) is 7;
if (rand == 7) {
    console.log("LUCKY! The number is 7!!!")
}



function perimeter(w, h) {
    var p = 2 * (w + h);
    return p;
}


console.log(perimeter(1, 2));
console.log(perimeter(4, 3));


function randomBetween(x, y) {
    return Math.floor(Math.random() * (y - x + 1) + x)
}

// 3 numbers return in ascending order
function ascendingOrder(a, b, c) {

    if (a < b) {
        if (b < c) {
            //  a < b < c
            return [a, b, c];
        } else if (c < a) {
            // c < a < b
            return [c < a < b]
        } else {
            // a < b
            // c < b
            // a < c
            return [a, c, b]
        }
    } else {
        if (c < a) {

        } else if (a < c) {

        } else {

        }
    }
}

// ascendingOrder(1, 3, 5)
// ascendingOrder(1, 5, 3)
// ascendingOrder(3, 1, 5)
// ascendingOrder(3, 5, 1)
// ascendingOrder(5, 1, 3)
// ascendingOrder(5, 3, 1)

// return true if coersion is true and not equal without
function isCoerced(a, b) {

    return (a == b && !(a === b))
}

// take string return reverse
function reversedStr(s) {
    var reverse = "";

    for (let char of s) {
        reverse = char + reverse;
    }

    return reverse;
}

// console.log(reversedStr("!dlrow olleH"))
// console.log(reversedStr("Hello world!"))

// counts occurences of a specific element
function countInArray(value) {
    var arr = [5, 7, 12, 5, 3, 3, 5]
    // count how many times value is in array
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            count++;
        }
    }
    return count;
}

// console.log(countInArray(5))
// console.log(countInArray(3))
// console.log(countInArray(7))
// console.log(countInArray(12))

// count occurence of each value in array
function allCountsInArray(arr) {
    // arr => [5, 7, 12, 5, 3, 3, 5]
    var counts = [];
    // counts => [[5, 3], [7, 1], ]

    // [12, 1]

    for (let value of arr) {
        for (let countPair of counts) {
            if (value == countPair[0]) {
                // we found the correct counting []
                countPair[1]++;
                break
            } else if (j == counts.length - 1) {
                // we didn't see it earlier and we didn't see it at the end
                counts.push([value, 1])
                break;
            }
        }
        if (counts.length == 0) {
            counts.push([value, 1])
        }
    }

    return counts;
}

// console.log(allCountsInArray([5, 7, 12, 5, 3, 3, 5]))


// arr -> check if sorted
function isArrSorted(arr) {
    // return true if arr is sorted (non decreasing order)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    // arr is in order
    return true;
}


function willObjectFallToGround(h, t) {
    var y = h - (4.9 * (t * t))
    if (y <= 0) {
        return true;
    }
}

function doesBobWin() {
    var bobSpeed = 18;
    var tomSpeed = 15;

    var bobDistance = 0.3;
    var tomDistance = 0.25;

    var bobTime = 1 / (bobSpeed / bobDistance);
    var tomTime = 1 / (tomSpeed / tomDistance);

    return bobTime < tomTime;
}

function findHeaviestAnimal(animals) {
    var heaviestAnimal = animals[0];
    for (let animal of animals) {
        if (animal.weight > heaviestAnimal.weight) {
            // then this is the new champion
            heaviestAnimal = animal;
        }
    }
    return heaviestAnimal.name;
}

var animals = [
    { "name": "Tortoise, indian star", "weight": 6.7, "gender": "M" },
    { "name": "African snake (unidentified)", "weight": 41.1, "gender": "M" },
    { "name": "Impala", "weight": 11.3, "gender": "M" },
    { "name": "Sloth, pale-throated three-toed", "weight": 18.3, "gender": "F" },
    { "name": "Pine squirrel", "weight": 30.1, "gender": "F" },
    { "name": "Giant anteater", "weight": 41.8, "gender": "M" },
    { "name": "Kori bustard", "weight": 50.0, "gender": "M" },
    { "name": "Langur, common", "weight": 28.1, "gender": "F" },
    { "name": "Boa, columbian rainbow", "weight": 15.9, "gender": "M" },
    { "name": "Zebra, common", "weight": 30.2, "gender": "M" },
    { "name": "Otter, cape clawless", "weight": 48.1, "gender": "F" },
    { "name": "Gonolek, burchell's", "weight": 38.4, "gender": "F" },
    { "name": "Worm snake (unidentified)", "weight": 25.0, "gender": "F" },
    { "name": "Whale, long-finned pilot", "weight": 39.6, "gender": "F" },
    { "name": "Tern, royal", "weight": 40.7, "gender": "F" },
    { "name": "Bent-toed gecko", "weight": 38.3, "gender": "F" },
    { "name": "Green vine snake", "weight": 13.3, "gender": "M" },
    { "name": "African fish eagle", "weight": 7.4, "gender": "M" },
    { "name": "Silver gull", "weight": 41.8, "gender": "F" },
    { "name": "Badger, honey", "weight": 19.3, "gender": "F" },
    { "name": "Antelope, sable", "weight": 21.6, "gender": "M" },
    { "name": "Trumpeter, green-winged", "weight": 44.9, "gender": "F" },
    { "name": "Common dolphin", "weight": 35.9, "gender": "F" },
    { "name": "Australian brush turkey", "weight": 41.5, "gender": "M" },
    { "name": "Hedgehog, south african", "weight": 20.1, "gender": "F" },
    { "name": "Macaw, blue and yellow", "weight": 31.2, "gender": "M" },
    { "name": "Robin, white-throated", "weight": 48.5, "gender": "M" },
    { "name": "Hoopoe, eurasian", "weight": 21.3, "gender": "M" },
    { "name": "Mongoose, javan gold-spotted", "weight": 31.7, "gender": "M" },
    { "name": "Buffalo, african", "weight": 26.8, "gender": "M" },
    { "name": "Squirrel, smith's bush", "weight": 9.0, "gender": "M" },
    { "name": "Eastern boa constrictor", "weight": 27.2, "gender": "F" },
    { "name": "Slender-billed cockatoo", "weight": 25.7, "gender": "F" },
    { "name": "Asiatic wild ass", "weight": 43.4, "gender": "M" },
    { "name": "Wapiti, elk,", "weight": 42.7, "gender": "F" },
    { "name": "Cow, scottish highland", "weight": 37.1, "gender": "M" },
    { "name": "Eagle, bateleur", "weight": 47.4, "gender": "M" },
    { "name": "Cheetah", "weight": 47.3, "gender": "M" },
    { "name": "Eastern dwarf mongoose", "weight": 47.9, "gender": "M" },
    { "name": "Reedbuck, bohor", "weight": 42.2, "gender": "F" },
    { "name": "Otter, brazilian", "weight": 34.5, "gender": "F" },
    { "name": "African wild dog", "weight": 17.3, "gender": "M" },
    { "name": "Defassa waterbuck", "weight": 22.7, "gender": "F" },
    { "name": "Dragon, netted rock", "weight": 24.4, "gender": "M" },
    { "name": "Lion, south american sea", "weight": 46.1, "gender": "M" },
    { "name": "Ringtail", "weight": 16.4, "gender": "M" },
    { "name": "Denham's bustard", "weight": 24.9, "gender": "F" },
    { "name": "Flightless cormorant", "weight": 43.2, "gender": "F" },
    { "name": "Goat, mountain", "weight": 47.4, "gender": "F" },
    { "name": "Buffalo, wild water", "weight": 7.8, "gender": "M" },
    { "name": "Goat, mountain", "weight": 22.8, "gender": "F" },
    { "name": "Clark's nutcracker", "weight": 34.4, "gender": "F" },
    { "name": "Sandhill crane", "weight": 26.7, "gender": "F" },
    { "name": "Blackbird, red-winged", "weight": 17.3, "gender": "F" },
    { "name": "Insect, stick", "weight": 47.0, "gender": "F" },
    { "name": "Striped skunk", "weight": 11.7, "gender": "M" },
    { "name": "Killer whale", "weight": 10.5, "gender": "M" },
    { "name": "Nilgai", "weight": 19.2, "gender": "M" },
    { "name": "Bleeding heart monkey", "weight": 8.3, "gender": "M" },
    { "name": "Dragon, frilled", "weight": 30.6, "gender": "M" },
    { "name": "Starfish, crown of thorns", "weight": 23.8, "gender": "F" },
    { "name": "Snake, carpet", "weight": 13.7, "gender": "M" },
    { "name": "Cape starling", "weight": 5.8, "gender": "F" },
    { "name": "Wolf, common", "weight": 15.3, "gender": "F" },
    { "name": "Desert kangaroo rat", "weight": 45.0, "gender": "F" },
    { "name": "Native cat", "weight": 40.9, "gender": "F" },
    { "name": "Genoveva", "weight": 43.0, "gender": "M" },
    { "name": "House sparrow", "weight": 48.7, "gender": "M" },
    { "name": "Little brown bat", "weight": 18.5, "gender": "M" },
    { "name": "Fowl, helmeted guinea", "weight": 9.8, "gender": "F" },
    { "name": "Albatross, waved", "weight": 33.6, "gender": "M" },
    { "name": "Armadillo, common long-nosed", "weight": 37.2, "gender": "F" },
    { "name": "Stork, marabou", "weight": 27.7, "gender": "M" },
    { "name": "Bulbul, black-fronted", "weight": 35.0, "gender": "F" },
    { "name": "Richardson's ground squirrel", "weight": 41.5, "gender": "M" },
    { "name": "Waved albatross", "weight": 34.4, "gender": "F" },
    { "name": "Dragon, western bearded", "weight": 48.6, "gender": "F" },
    { "name": "Duck, mountain", "weight": 9.4, "gender": "M" },
    { "name": "Flamingo, roseat", "weight": 40.4, "gender": "M" },
    { "name": "Bird, bare-faced go away", "weight": 27.3, "gender": "F" },
    { "name": "Blacksmith plover", "weight": 30.6, "gender": "F" },
    { "name": "Seal, harbor", "weight": 5.7, "gender": "F" },
    { "name": "Stilt, black-winged", "weight": 21.2, "gender": "M" },
    { "name": "Yellow-bellied marmot", "weight": 18.3, "gender": "M" },
    { "name": "Paddy heron (unidentified)", "weight": 16.4, "gender": "M" },
    { "name": "Superb starling", "weight": 33.9, "gender": "F" },
    { "name": "Baboon, olive", "weight": 38.3, "gender": "F" },
    { "name": "Stone sheep", "weight": 12.4, "gender": "F" },
    { "name": "Otter, north american river", "weight": 44.9, "gender": "M" },
    { "name": "Squirrel, eurasian red", "weight": 39.8, "gender": "M" },
    { "name": "Adouri (unidentified)", "weight": 41.1, "gender": "F" },
    { "name": "Wambenger, red-tailed", "weight": 35.9, "gender": "F" },
    { "name": "Jackal, silver-backed", "weight": 19.9, "gender": "F" },
    { "name": "Goose, cereopsis", "weight": 24.2, "gender": "F" },
    { "name": "Sulfur-crested cockatoo", "weight": 8.0, "gender": "F" },
    { "name": "Bird, pied butcher", "weight": 39.2, "gender": "F" },
    { "name": "Long-finned pilot whale", "weight": 23.3, "gender": "F" },
    { "name": "Tokay gecko", "weight": 10.6, "gender": "M" },
    { "name": "Langur, common", "weight": 23.9, "gender": "M" },
    { "name": "Mongoose, yellow", "weight": 40.7, "gender": "F" }
];

console.log(findHeaviestAnimal(animals));
