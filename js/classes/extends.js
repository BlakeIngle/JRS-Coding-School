class Villain {
    name
    id

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class SuperVillain extends Villain {
    power

    constructor(name, id, power) {
        //call super constructor
        super(name, id)

        this.power = power
    }
}


let joker = new Villain('Joker', 1);
let lexLuther = new SuperVillain('Lex Luthor', 2, 'Intelligence');

console.log(joker)
console.log(lexLuther)






class Rectangle {
    width
    height

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }
}

class Square extends Rectangle {

    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}

let rect = new Rectangle(3, 4)
console.log(rect.getArea())

let squ = new Square(3)
console.log(squ.getArea())