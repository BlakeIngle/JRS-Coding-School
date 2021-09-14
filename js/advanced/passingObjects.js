class Circle {
    x;
    y;
    r;
    color;

    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.r = obj.r;
        this.color = obj.color;
    }
}


var c1 = new Circle(5, 5, 10, "blue")

// var c2 = new Circle(c1.x, c1.y, c1.r, c1.raduis);
var c2 = new Circle(c1);

function drawCircle(circle) {
    // x, y, r, color
}

drawCircle(c1);

drawCircle({
    x: c1.x,
    y: c2.y,
    r: c1.r,
    color: c2.color
});