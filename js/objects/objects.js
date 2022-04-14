var blake = {
    hairColor: 'brown',
    age: 25,
    isMarried: false,
    education: {
        highSchoolName: 'BHS',
        highSchoolGraduationYear: 2015
    }
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

// console.log(me);
// console.log(me.age);
// console.log(me.education.highSchoolName, me.education.highSchoolGraduationYear)






blake.education
blake['education']

blake.education.highSchoolName
blake['education'].highSchoolName
blake['education']['highSchoolName']
