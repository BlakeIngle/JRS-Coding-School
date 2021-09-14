/**
 * 30) Leibniz's formula can compute pi. the formula is given below:
 * pi = 4 * (1/1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
 * 
 *  1/(i*2)
 * 
 * The elipsis (the three dots) means this pattern continues forever.
 * Notice that the operators ( + and - ) alternate each time.
 * Write a function called calculatePi(), that takes an argument that 
 * specifies the number of terms to calculate 
 * from (don't include the 4 in the count) with this formula and returns 
 * the value. For example if you said:
 * Ex. calculatePi(5) would return the result of the first 5 terms in 
 * the parentheses, meaning 1 through (1/9) in 
 * this case.
 */

function leibniz(n) {
    let pi = 0;
    let add = true;
    for (let i = 1; i < n * 2; i += 2) {
        if (add) {
            pi += 4 / i;
        } else {
            pi -= 4 / i;
        }
        add = !add;
    }
    console.log(pi)
    return pi;
}


leibniz(5)
leibniz(50)
leibniz(500)
leibniz(5000)
leibniz(50000)
leibniz(500000)
leibniz(5000000)
leibniz(50000000)
leibniz(500000000)
leibniz(5000000000)