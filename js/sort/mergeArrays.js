var arr1 = [0, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8];
var arr2 = [0, 0, 1, 3, 3, 4, 5, 7, 7, 8, 9];

function mergeArrays(arr1, arr2) {
    var mergedArr = [];
    /* -------------------------------------------- */

    var i = 0;
    var j = 0;

    while (i < arr1.length && j < arr2.length) {
        mergedArr.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    }

    if (i < arr1.length) {
        for (i; i < arr1.length; i++) {
            mergedArr.push(arr1[i])
        }
    } else {
        for (j; j < arr2.length; j++) {
            mergedArr.push(arr2[j])
        }
    }

    /* -------------------------------------------- */
    return mergedArr;
}

console.log(mergeArrays(arr1, arr2))