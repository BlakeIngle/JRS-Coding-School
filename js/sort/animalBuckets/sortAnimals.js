const { people } = require('./animalData');
console.log(people.length);

// sortPeople(people);
// console.log(people);

function sortPeople(people) {
    people.sort((a, b) => a.age - b.age);
}
