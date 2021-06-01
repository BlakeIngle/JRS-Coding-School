function findTidy(n) {

    for (let i = n; i > 0; i--) {
        // return i if it is tidy
        if (isTidy(i)) {
            return i;
        }
    }
}

function isTidy(n) {
    // n -> 999988877766
    n = n.toString()
    for (let i = 0; i < n.length - 1; i++) {
        if (n.charAt(i) > n.charAt(i + 1)) {
            return false;
        }
    }
    return true;
}

function findTidyQuick(n) {
    n = n.toString();

    let firstOfN = 0
    for (let i = 0; i < n.length - 1; i++) {
        // first index in a repeating sequence
        if (n.charAt(i) < n.charAt(i + 1)) {

            firstOfN = i + 1; // 1234443 - 7, 3, 3 , 7 - (3 + 1)
            // 3 < 4 -> first of N is index of first 4
        } else if (n.charAt(i) > n.charAt(i + 1)) {
            let output = "";

            // take left side of original number
            output += n.slice(0, firstOfN);
            // add index-1
            output += n.charAt(firstOfN) - 1;
            // add repeating 9s
            for (let i = 0; i < n.length - firstOfN - 1; i++) {
                output += "9"
            }
            output = output.replace("0", "")
            return output;
        }
    }
    return n
}

console.log(findTidyQuick(1)) // 1
console.log(findTidyQuick(123)) // 123 
console.log(findTidyQuick(112243)) // 112239
console.log(findTidyQuick(321)) // 299
console.log(findTidyQuick(999999999990)) // 8999999999
console.log(findTidyQuick(10)) // 9
    // 1243 -> 1239
    // 124300 -> 123999
    // 124443 -> 123999
    // 123444999888777 -> 899999999
    // -> 999799999
    // -> 899999999