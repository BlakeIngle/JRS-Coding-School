var arr = [1, 7, 3, 6, 9, 4, 3, 6, 0, 4]

arr.sort((a, b) => b - a);

console.log(arr);




console.log(
    arr.filter((value) => {
        return value % 2 == 0;
    })
)