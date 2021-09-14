class Rectangl {

    width; // member variable
    height;

    area;
    color; // string

    constructor(w, h) {
        this.width = w;
        this.height = h;

        this.setArea();
    }

    setArea() {
        this.area = this.width * this.height;
    }

    getArea() {
        return this.area;
    }

    setColor(value) {
        this.color = value;
    }

    getPerimiter() {
        let p = this.width * 2 + this.height * 2
        return p;
    }
}

// write a class for a circle


class Circle {
    r;
    x; // this.x
    y; // this.y
    list = []; // a list in the circle

    constructor(obj) {

        this = Object.assign(this, obj)
        if (obj.list) {
            this.list = [];
            for (let i = 0; i < obj.list.length; i++) {
                this.list.push(obj.list[i])
            }
        }

        this.r = r;

        this.x = 0;
        this.y = 0;
    }

    setX(x) {
        this.x = x;
    }

}


// initialize two circles
var circle1 = new Circle(5);
circle1.setX(10);
var circle2 = new Circle(3);




function distanceBetween(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow(y2 - y1, 2))
}



function doCirclesIntersect(circle1, circle2) {
    var d = distanceBetween(circle1.x, circle1.y, circle2.x, circle2.y);

    if (circle1.r + circle2.r < d) {
        return false;
    }

    return true;
}


console.log(doCirclesIntersect(circle1, circle2))
