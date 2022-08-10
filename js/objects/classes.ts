
class Rectangle {
    public length: number;
    protected width: number;
    area: number;

    static cornerAngle = 90;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    private getArea() {
        return this.length * this.width
    }

    public getWidth() {
        return this.width;
    }

    public setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        } else {
            return;
        }
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

Rectangle.cornerAngle;

// output the length, width, and area
r1.length = 3;

console.log(r1.length, r1.getWidth());
console.log(r1.getArea());
console.log(r2.getArea());

let s1 = new Square(4);
console.log(s1);
console.log(s1.getArea());