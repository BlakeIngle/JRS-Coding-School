class Shape {
    public numOfSides: number;

    constructor(numSides: number) {
        this.numOfSides = numSides;
    }
}

class Rectangle extends Shape {
    public width: number;
    public height: number;

    protected readonly area: number;
    public static myName: string;
    private secret: boolean;

    static cornerAngleDeg: number = 90;
    static readonly RADIO = "radio"

    constructor(width, heigth) {
        super(4);

        this.width = width;
        this.height = heigth;

        this.area = width * heigth;
    }


    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

class Square extends Rectangle {

    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getArea() {
        return this.area
    }
}

class Fence extends Square {
    constructor(fenceLength: number) {
        super(fenceLength);
    }

    getAcreage() {
        return this.area;
    }
}

let sq = new Square(4)

let rect = new Rectangle(3, 4)

Rectangle.cornerAngleDeg

Rectangle.RADIO