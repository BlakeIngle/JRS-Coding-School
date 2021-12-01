class Rectangle {
    protected width: number;
    protected height: number;

    public static readonly cornerAngle: number = 90;

    private id: number;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
        this.id = 1;
    }

    getPerimiter(): number {
        return 2 * this.width + 2 * this.height
    }

    public getArea(): number {
        return this.width * this.height;
    }

}

class Square extends Rectangle {

    constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getPerimiter() {
        return this.width * 4;
    }
}

var s: Square = new Square(4);
var r: Rectangle = new Rectangle(2, 5)

console.log(s.getPerimiter()); // width * 4
console.log(r.getPerimiter()); // width * 2 + height * 2

class Animal {
    name: string;
    latinName: string;

    className: string; // mammal amphibion

    static readonly CLASSES = {
        MAMMAL: "mammal",
        BIRD: "bird",
        REPTILE: "reptile",
        INVERTEBRATE: "invertebrate",
        FISH: "fish",
        AMPHIBIAN: "amphibian"
    }

    constructor(name, latinName, className) {

    }
}

let boxer = new Animal('boxer', 'something canine', Animal.CLASSES.MAMMAL)
boxer.className;

let animal = new Animal('', '', '');