// 1. Write a JavaScript function that returns the reverse a number.
// Example x = 32246;
// Expected Output : 64223

function reverseNumber(n) {
    n = String(n);
    let revN = ''
    for (let i = n.length - 1; i >= 0; i--) {
        revN += n.charAt(i);
    }
    return revN;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function stringAlphabetical(str): string {
    let alphabeticalStr = '';

    alphabeticalStr = str.split('').sort().join('');

    return alphabeticalStr;
}

console.log(stringAlphabetical('cCbBAa'));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

function capitalizeFirstLetter(str: string): string {
    let capitalizedSentence = '';

    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    capitalizedSentence = words.join(' ');

    return capitalizedSentence;
}

// 6. Write a function that accepts a string as a parameter and returns the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function longestWordIn(str: string): string {
    let longestWord: string = ''

    let words = str.split(' ');
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// 7. Write a function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : Do not count 'y'.
// Example string : 'The quick brown fox'
// Expected Output : 5

function numberOfVowelsIn(str: string): number {
    let count: number = 0;

    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// Example n: 2
// Expected Output : 
// [
//     [1, 0],
//     [0, 1]
// ]
// Example n: 3
// Expected Output : 
// [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ]
function identityMatrix() { }

// 13. Write a JavaScript function to compute the factors of a positive integer n.
// Example n: 6
// Expected Output: [1, 2, 3, 6]
function factorsOf(n: number): number[] {
    let factors = [1];

    let t0 = new Date();

    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }
    // for (let i = 1; i <= n; i++) {
    //     if (n % i == 0) {
    //         factors.push(i);
    //     }
    // }

    let t1 = new Date();

    factors.push(n);

    console.log("factoring took " + (t1.getTime() - t0.getTime()) + 'ms')
    return factors;
}

// let f = factorsOf(1000000000);
// console.log(f);

// 16. Write a JavaScript function that returns a string that only containing unique characters from a given string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function foo2() { }

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// Example string : "Hello"
// Expected Output : [["H", 1], ["e", 1], ["l", 2], ["o", 1]]

function foo3() { }

// 20. Write a JavaScript function that generates a string id of random characters with a given length n.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// Example n: 6
// Expected Output: "Scb89s"

function randomId(size: number): string {
    let options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let id = '';

    for (let i = 0; i < size; i++) {
        let randNum = Math.floor(Math.random() * options.length);
        let randChar = options.charAt(randNum);
        id += randChar;
    }

    return id;
}

// 22. Write a function that accepts two arguments, a string and a character and the function will count the number of occurrences of the specified character within the string.
// Sample arguments : 'Hello world', 'o'
// Expected output : 2

function countChar(str: string, char: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count++;
        }
    }

    return count;
}

// 23. Write a JavaScript function to find the first not repeated character in a given string.
// Example string : 'abacddbec'
// Expected output : 'e'

function foo6() { }

// 26. Write a function to find longest substring, without repeating characters, in a given a string.
// Example String: "Hello world"
// Expected Output: " world"

function longestSubStr(str: string): string {
    let longestSubStr = ''

    let flag = 0;
    for (let i = 1; i <= str.length; i++) {
        let char = str.charAt(i);

        // get left sub str
        let leftSub = str.slice(flag, i);
        if (leftSub.includes(char) || i == str.length) {
            // next char creates a duplicate
            if (leftSub.length > longestSubStr.length) {
                longestSubStr = leftSub;
            }
            flag = str.indexOf(char, flag) + 1;
        }
    }

    return longestSubStr;
}

console.log(longestSubStr("hello world"));


// pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...)
function estimatePi(n): number {
    let pi = 0;
    // pi = ((4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + ...)

    for (let i = 1; i < n; i++) {
        if (i % 2 == 0) {
            pi -= (4 / (i * 2 - 1))
        } else {
            pi += (4 / (i * 2 - 1))
        }
    }
    return pi;
}

console.log(estimatePi(30))
console.log(estimatePi(300))
console.log(estimatePi(3000))
console.log(estimatePi(30000))
console.log(estimatePi(300000))
console.log(estimatePi(3000000))
console.log(estimatePi(30000000))
console.log(estimatePi(300000000))
console.log(Math.PI)