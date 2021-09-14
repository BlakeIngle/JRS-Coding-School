

var instruments = [
    {
        name: "trumpet",
        type: "brass"
    },
    {
        name: "piano",
        type: "string"
    },
    {
        name: "flute",
        type: "wood-wind"
    },
    {
        name: "guitar",
        type: "string"
    },
    {
        name: "timpani",
        type: "percussion"
    }
]

instruments[0].name;

class Instrument {
    name;
    type;
    sound;

    constructor(name, type, sound) {
        // code goes here
        this.name = name;
        this.type = type;
        this.sound = sound;
    }

    playSound() {
        console.log(this.sound)
    }
}

class Guitar {
    name;
    type;
    brand;

    constructor(brand) {
        this.name = "guitar";
        this.type = "string";
        this.brand = brand;
    }
}

var guitar = new Instrument("string", "guitar", "strum strum");
var triangle = new Instrument("percussion", "triangle", "ding ding ding");

var lesPaul = new Guitar("Les Paul")
console.log(lesPaul);

guitar.playSound();
triangle.playSound();