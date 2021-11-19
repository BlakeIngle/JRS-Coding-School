var { people } = require('./animalData');
// console.log(people);


// sort the people
// the people should be sorted first by age
//      in ascending order
//      'youngest -> oldest'

//      if two people are the same age,
//      they should be sorted by favorite color
//      alphabetically
//      'blue' -> 'green' -> 'red' -> 'yellow'
//      but age 18 'yellow' -> 25 'blue'

//          if two people are the same age
//          and have the same favorite color
//          sort them by favorite animal
//          reverse alphabeticall.
//          'zebra' -> 'cat'

// tl;dr;
//  sort by:
/**
 * age -> ascending
 * favColor -> alphabetically
 * favAnimal -> reverse alphabetically
 * name -> length
 * name -> alphabetically
 */






function sortPeople(people: Person[]): Person[] {

    // hash into age buckets (and sort internally)
    people = hashAge(people);

    return people;
}

function hashAge(people: Person[]): Person[] {
    var ageBuckets = [];
    var minAge = 18;
    var maxAge = 25;
    var totalBuckets = maxAge - minAge + 1;

    for (let i = 0; i < totalBuckets; i++) {
        ageBuckets.push([]);
    }
    // buckets are made
    for (let person of people) {
        ageBuckets[person.age - 18].push(person);
    }
    // buckets are filled
    for (let i in ageBuckets) {
        ageBuckets[i] = hashColors(ageBuckets[i]);
    }
    // console.log([].concat(...ageBuckets))

    // now flatten

    return [].concat(...ageBuckets);
}

function hashColors(people: Person[]): Person[] {

    var colorBuckets: Person[][] = [];

    personLoop: for (let person of people) {
        // put person in the right bucket
        for (let bucket of colorBuckets) {
            if (bucket[0].favoriteColor == person.favoriteColor) {
                bucket.push(person);
                continue personLoop;
            }
        }
        // bucket not found
        // insert new bucket
        var newBucket = [person];
        var newColor = person.favoriteColor;

        for (let i in colorBuckets) {
            if (newColor < colorBuckets[+i][0].favoriteColor) {
                colorBuckets.splice(+i, 0, newBucket);
                continue personLoop;
            }
        }
        // new bucket inserted

        // unless colorBuckets was empty:
        colorBuckets.push(newBucket); // handle that
    }

    // buckets are filled
    console.log(colorBuckets)

    return [].concat(...colorBuckets);
}

sortPeople(people);
// console.log(people);



interface Person {
    age: number;
    firstName: string;
    favoriteColor: string;
    favoriteAnimal: string;
}
