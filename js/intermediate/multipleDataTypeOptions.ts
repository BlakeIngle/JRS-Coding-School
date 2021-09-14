let a: number | number[] = [1, 2, 3];

if (a instanceof Array) {
    for(let v of a) {
        console.log(v)
    }
} else {
    console.log(a)
}