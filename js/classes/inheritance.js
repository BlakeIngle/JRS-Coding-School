

class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
}

class Square extends Rectangle {

    constructor(sideLength) {
        super(sideLength, sideLength)
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

var s = new Square(4)

console.log(s)
console.log(s.getPerimeter())