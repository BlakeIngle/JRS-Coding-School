// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

let words = ["Hello", "world", "in", "an", "frame"];

function printWithFrame(words) {
    let longestLength = 0;
    for (let word of words) {
        // do something
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    let hf = "****" // hf
    for (let i = 0; i < longestLength; i++) {
        hf += "*"
    }

    console.log(hf);
    for (let word of words) {
        let output = "* " + word;
        for (let i = word.length; i < longestLength; i++) {
            output += " ";
        }
        output += " *"
        console.log(output)
    }
    console.log(hf)
}

printWithFrame(words);