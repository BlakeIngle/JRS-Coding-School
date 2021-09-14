
// class Rectangle {
//     width;
//     height;
//     x;
//     y;

//     constructor(width, height, x, y) {
//         this.width = width;
//         this.height = height;
//         this.x = x;
//         this.y = y;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getPerimiter() {
//         return 2 * (this.width + this.height);
//     }
// }

// class Square extends Rectangle {

//     constructor(sideLength, x, y) {
//         super(sideLength, sideLength, x, y)
//     }

//     getPerimiter() {
//         return this.width * 4;
//     }
// }


// let r1 = new Rectangle(4, 6, 0, 0)
// let r2 = new Rectangle("4", "6", 0, 0)
// let s1 = new Square(4, 0, 0)

// console.log(r2)
// // console.log(s1)
// // console.log(s1.width)
// // console.log(r1.getArea());
// // console.log(s1.getArea());


// console.log(r1 instanceof Rectangle) // true
// console.log(r1 instanceof Square) // false 

// console.log(s1 instanceof Rectangle) // true 
// console.log(s1 instanceof Square) // true