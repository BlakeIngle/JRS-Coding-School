exports.isEven = (n) => {
    return n % 2 == 0;
}

exports.isOdd = (n) => {
    return !this.isEven(n);
}