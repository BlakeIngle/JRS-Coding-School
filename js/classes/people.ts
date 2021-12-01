var people: {
    firstName: string,
    lastName: string,
    age: number
}[] = [
        { "firstName": "Tarrance", "lastName": "Dudman", "age": 38 },
        { "firstName": "Cheryl", "lastName": "Keightley", "age": 28 },
        { "firstName": "Pansie", "lastName": "Buche", "age": 43 },
        { "firstName": "Ramsay", "lastName": "Walsh", "age": 24 },
        { "firstName": "Ronna", "lastName": "Bartolommeo", "age": 42 },
        { "firstName": "Layton", "lastName": "Siney", "age": 48 },
        { "firstName": "Lida", "lastName": "Lukas", "age": 45 },
        { "firstName": "Morgana", "lastName": "Lowery", "age": 48 },
        { "firstName": "Al", "lastName": "Cunniam", "age": 45 },
        { "firstName": "Dillon", "lastName": "Barlthrop", "age": 23 },
        { "firstName": "Gabriello", "lastName": "Fadden", "age": 34 },
        { "firstName": "Tiphanie", "lastName": "Winscomb", "age": 25 },
        { "firstName": "Hedvige", "lastName": "Meddows", "age": 31 },
        { "firstName": "Tadio", "lastName": "Drinan", "age": 26 },
        { "firstName": "Brear", "lastName": "Bricksey", "age": 31 },
        { "firstName": "Yurik", "lastName": "Augustin", "age": 32 },
        { "firstName": "Evaleen", "lastName": "Eastwell", "age": 22 },
        { "firstName": "Deane", "lastName": "Nuss", "age": 42 },
        { "firstName": "Dolley", "lastName": "Tremoulet", "age": 22 },
        { "firstName": "Gwyneth", "lastName": "Allum", "age": 34 },
        { "firstName": "Rad", "lastName": "Brackenbury", "age": 28 },
        { "firstName": "Fidelia", "lastName": "Van't Hoff", "age": 34 },
        { "firstName": "Shelia", "lastName": "Huff", "age": 24 },
        { "firstName": "Conrado", "lastName": "Yves", "age": 49 },
        { "firstName": "Carree", "lastName": "Hedman", "age": 30 },
        { "firstName": "Lindsey", "lastName": "Dongles", "age": 26 },
        { "firstName": "Kris", "lastName": "Sparshett", "age": 18 },
        { "firstName": "Sheffield", "lastName": "Croot", "age": 46 },
        { "firstName": "Jermayne", "lastName": "Retallick", "age": 20 },
        { "firstName": "Ivar", "lastName": "Giller", "age": 28 },
        { "firstName": "Pauly", "lastName": "Carlet", "age": 21 },
        { "firstName": "Miltie", "lastName": "Vassbender", "age": 26 },
        { "firstName": "Jolene", "lastName": "Neeves", "age": 36 },
        { "firstName": "Bev", "lastName": "Hulburd", "age": 44 },
        { "firstName": "Maurice", "lastName": "Borrie", "age": 26 },
        { "firstName": "Nicoli", "lastName": "Horsey", "age": 19 },
        { "firstName": "Max", "lastName": "Copestake", "age": 47 },
        { "firstName": "Chrystel", "lastName": "Beau", "age": 24 },
        { "firstName": "Dora", "lastName": "Sydney", "age": 39 },
        { "firstName": "Fredia", "lastName": "Reilinger", "age": 25 },
        { "firstName": "Rusty", "lastName": "Harsent", "age": 23 },
        { "firstName": "Louise", "lastName": "Hakey", "age": 42 },
        { "firstName": "Tallie", "lastName": "Eustis", "age": 32 },
        { "firstName": "Imelda", "lastName": "Alwood", "age": 49 },
        { "firstName": "Johanna", "lastName": "Everist", "age": 25 },
        { "firstName": "Lorilyn", "lastName": "Chittock", "age": 33 },
        { "firstName": "Reuven", "lastName": "Barstowk", "age": 46 },
        { "firstName": "Libby", "lastName": "Jaskiewicz", "age": 50 },
        { "firstName": "Krisha", "lastName": "Quant", "age": 25 },
        { "firstName": "Jarred", "lastName": "Geelan", "age": 27 }
    ];

// output the person (whole object) 
// that is the oldest

var oldestSoFar: {
    firstName: string,
    lastName: string,
    age: number
};

oldestSoFar = people[0];
var longestLastNameSoFar: {
    firstName: string,
    lastName: string,
    age: number
} = people[0];

for (let person of people) {
    if (person.age > oldestSoFar.age) {
        // this person is now the oldest so far
        oldestSoFar = person;
    }
    if (person.lastName.length > longestLastNameSoFar.lastName.length) {
        longestLastNameSoFar = person;
    }
}

console.log(oldestSoFar)

// output the person with the longest last name


console.log(longestLastNameSoFar);

console.log(people.find((person: {
    firstName: string,
    lastName: string,
    age: number
}) => {
    return person.age == 50
}));