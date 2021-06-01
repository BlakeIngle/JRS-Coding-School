// class Vehicle {
//     type: string;

//     maxRange: number;
//     range: number;

//     hasWheels: boolean;

//     constructor(maxRange: number) {
//         this.maxRange = maxRange;
//         this.range = this.maxRange;
//     }

//     refuel() {
//         this.range = this.maxRange;
//     }
// }

// class Automobile extends Vehicle {

//     tankSize: number;
//     fuelInGallons: number; // how many gallon of fuel are in the tank

//     constructor(tankSize, fuelEffiency) {
        

//         let range = tankSize * fuelEffiency; // total miles able to travel on max tank
//         super(range)

//         this.tankSize = tankSize
//         this.fuelInGallons = this.tankSize;
//     }

//     refuel() {
//         this.fuelInGallons = this.tankSize
//     }
// }


// let car = new Automobile(13, 35)

// console.log(car)