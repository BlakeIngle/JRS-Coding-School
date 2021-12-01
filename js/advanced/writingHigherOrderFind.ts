// write a function called 'find'
// that takes two arguments. An arr
// and a function.
// its behavior mimics the behavior of the 
// higher order Array.find() function.



function find(
    arr: any[],
    cb: (value: any, i?: number, arr?: any[]) => boolean | void
): any | null {
    /* ------------- */
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return arr[i];
        }
    }
    /* ------------- */
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var a = find(arr, (value) => value == 5);

console.log(a)


