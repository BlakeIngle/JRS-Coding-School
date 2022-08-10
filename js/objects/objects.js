var me = {
    hairColor: 'brown',
    age: 25,
    isMarried: false,
    education: {
        highSchoolName: 'BHS',
        highSchoolGraduationYear: 2015,
        universityName: "Wright State University",
        universityGraduationYear: 2019
    },
    pets: [
        {
            name: "Dash",
            type: "dog"
        }
    ]
}

var brian = {
    hairColor: 'brown',
    age: 34,
    isMarried: false,
    education: {
        highSchoolName: 'Wando',
        highSchoolGraduationYear: 2006
    }
}

// dot notation
// me.age
// // bracket notation
// objName['propName'] // string literal
// var a = 'propName'
// objName[a];         // string reference

console.log(me);
console.log(me.education.highSchoolGraduationYear)
console.log(me.pets[0].name)

me.isMarried = true;