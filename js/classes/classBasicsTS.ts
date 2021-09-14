class Rectangle {
    public width: number;
    public height: number;
    public x: number;
    public y: number;

    protected id: number;

    // static cornerAngle: number = 90; //90 deg
    static readonly CORNER_ANGLE = 90;

    constructor (width: number, height: number, x: number, y: number, id: number) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.id = id;
    }

    public getArea() {
        return this.width * this.height;
    }

    public getPerimiter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Rectangle {

    constructor(sideLength, x, y, id) {
        super(sideLength, sideLength, x, y, id)

        this.width;
        this.id;
    }

    public getPerimiter() {
        return this.width * 4;
    }
}

let r1 = new Rectangle(4, 6, 0, 0, 1)
let r2 = new Rectangle(4, 4, 0, 0, 2)
let s1 = new Square(4, 0, 0, 3)

console.log(r2);

r1.width;
// r2.cornerAngle;
Rectangle.CORNER_ANGLE; // static readonly
Math.PI; // static readonly

console.log(r1 instanceof Rectangle) // true
console.log(r1 instanceof Square) // false 

console.log(s1 instanceof Rectangle) // true 
console.log(s1 instanceof Square) // true




var a;
const B = "foo";

// B = "bar"; // cannot do this