
exports.getHelloWorld = (req, res) => {
    res.send("Hello World!");
}

exports.getJimmyJonhs = (req, res) => {
    res.send("Jimmy John's is like kinda good.");
}

exports.getRandomNumber = (req, res) => {
    let r = Math.random() * 10
    res.send(r + "");
}
