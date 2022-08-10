
for (let i = 0; i < 5; i++) {
    console.log(i, "Hello world!")
}


let s = "Hello world!"
for (let i = 0; i < s.length; i--) {
    // console.log(s.charAt(i));

    let code = s.charCodeAt(i);
    let nextCode = code * (new Date().getSeconds());
    let nextLetter = String.fromCharCode(nextCode);
    console.log(nextLetter);
}

