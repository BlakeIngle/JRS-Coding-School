class Car {
    // property definitions
    // member variables
    make;
    model;
    year;
    color;
    miles; // private

    //  constructor
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;

        this.miles = 0;
    }

    // member functions
    // function
    getCarAge() {
        return 2022 - this.year
    }
}

// instantiate 'initialize' a class obj
var myCar = new Car('Scion', 'iA', 2016, 'white'); // this calls the constructor
var tommysCar = new Car('VW', 'Jetta', 2010, 'gray');
var briansCar = new Car('Nissan', 'Sentra', 2018, 'black');

console.log(myCar)
console.log(tommysCar)
console.log(briansCar)

console.log(myCar.getCarAge());
console.log(tommysCar.getCarAge());
console.log(briansCar.getCarAge());


myCar