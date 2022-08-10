
class Rectangle {
    length;
    width;

    static cornerAngle = 90;

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width
    }
}

class Square extends Rectangle {

    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getArea() {
        return Math.pow(this.length, 2)
    }
}

// create a rectangle
let r1 = new Rectangle(3, 4);
let r2 = new Rectangle(5, 1);
console.log(r1);

Rectangle.cornerAngle; // static
Math.PI; // static

// output the length, width, and area
console.log(r1.length, r1.width)
console.log(r1.getArea());
console.log(r2.getArea());

let s1 = new Square(4);
console.log(s1);
console.log(s1.getArea());


