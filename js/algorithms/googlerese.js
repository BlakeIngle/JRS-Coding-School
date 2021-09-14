function googleTranslate(input) {

    let map = {
        'a': 'y',
        'b': 'h',
        'c': 'e',
        'd': 's',
        'e': 'o',
        'f': 'c',
        'g': 'v',
        'h': 'x',
        'i': 'd',
        'j': 'u',
        'k': 'i',
        'l': 'g',
        'm': 'l',
        'n': 'b',
        'o': 'k',
        'p': 'r',
        'q': 'z',
        'r': 't',
        's': 'n',
        't': 'w',
        'u': 'j',
        'v': 'p',
        'w': 'f',
        'x': 'm',
        'y': 'a',
        'z': 'q',
        ' ': ' ',
    }

    let output = ""
    for (let c of input) {
        output += map[c]
    }

    return output;
}

let i1 = "ejp mysljylc kd kxveddknmc re jsicpdrysi"
let i2 = "rbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcd"
let i3 = "de kr kd eoya kw aej tysr re ujdr lkgc jv"

// our language is impossible to understand
// there are twenty six factorial possibilities
// so it is okay if you want to just give up

console.log(googleTranslate("y qee"))
console.log(googleTranslate(i1))
console.log(googleTranslate(i2))
console.log(googleTranslate(i3))




function translateLetter(c) {
    switch (c) {
        case "a": return "y";
        case "b": return "h";
        case "c": return "e";
    }
}