


function areaOfRect(w, h) {
    var area = w * h;
    console.log(area);

    // this is the final answer
    return area;
}

areaOfRect(3, 4);

let a = 3;
let b = 2;
areaOfRect(a, b);


console.log(areaOfRect(a, b * a))




function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area;
}

console.log(areaOfCircle)   // reference to the function
console.log(areaOfCircle()) // calling/invoking the function
console.log(areaOfCircle(1))// passing in (the values of) params/parameters