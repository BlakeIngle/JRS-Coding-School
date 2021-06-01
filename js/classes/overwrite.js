class Vehicle {
    type;

    maxRange;
    range;

    hasWheels;

    constructor(maxRange) {
        this.maxRange = maxRange;
        this.range = this.maxRange;
    }

    refuel() {
        this.range = this.maxRange;
    }

    travel(miles) {
        if (this.range > miles) {
            this.range -= miles;
        }
    }
}

class Automobile extends Vehicle {

    tankSize;
    fuelInGallons; // how many gallon of fuel are in the tank
    fuelEffiency;

    constructor(tankSize, fuelEffiency) {


        let range = tankSize * fuelEffiency; // total miles able to travel on max tank
        super(range)

        this.fuelEffiency = fuelEffiency
        this.tankSize = tankSize
        this.fuelInGallons = this.tankSize;
    }

    refuel() {
        this.fuelInGallons = this.tankSize
        this.drive = () => { console.log("lol you broke it.") }
    }

    drive(miles) {
        console.log("regular drive")
        if (miles < (this.fuelInGallons * this.fuelEffiency)) {
            this.fuelInGallons -= miles / this.fuelEffiency;
        }

        this.travel(miles)
    }

    checkTires(numTires) {

        console.log(Number.isNaN(numTires))

        if (!Number.isNaN(numTires)) {
            console.log("here")
                //its a number
            for (let i = 0; i < numTires; i++) {
                console.log("Tire #" + i + " is good.")
            }
        } else if (numTires instanceof String) {
            // its a string
            console.log("All " + numTires + " are good.")
        }

    }
}

let boat = new Vehicle(1200);
let car = new Automobile(13, 35)

console.log(car)

car.checkTires(4)
car.checkTires("four")

// console.log(boat)

// boat.travel(400)

// console.log(boat)