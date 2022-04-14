/**
 * 1. Write a function that takes n and 
 *      uses a loop to calculate n!
 *      (assume n will be a positive whole number)
 * 2. Write a recursive function that
 *      takes a value n and returns
 *      the value of n! (n factorial)
 *      ex: 4! = 4 * 3 * 2 * 1
 *          9! = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
 */

// Counting sheep
/**
 * Google Code Jam 2016 - Qualification Round:
 * 
 * Bleatrix Trotter the sheep has devised a strategy that helps her fall 
 * asleep faster. First, she picks a number N. Then she starts 
 * naming N, 2 × N, 3 × N, and so on. Whenever she names a number, she 
 * thinks about all of the digits in that number. She keeps track of 
 * which digits (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9) she has seen at 
 * least once so far as part of any number she has named. Once she 
 * has seen each of the ten digits at least once, she will fall asleep.
 * 
 * Bleatrix must start with N and must always name (i + 1) × N directly 
 * after i × N.  
 * For example, suppose that Bleatrix picks N = 1692. 
 * 
 * She would count as follows:
 * N = 1692.  Now she has seen the digits 1, 2, 6, and 9.
 * 2N = 3384. Now she has seen the digits 1, 2, 3, 4, 6, 8, and 9.
 * 3N = 5076. Now she has seen all ten digits, and falls asleep.
 * 
 * What is the last number that she will name before falling asleep? 
 * If she will count forever, print INSOMNIA instead.
 */

// Tidy Numbers
/**
 * Google Code Jam 2017 - Quallification round
 * Tatiana likes to keep things tidy. Her toys are sorted from 
 * smallest to largest, her pencils are sorted from shortest to 
 * longest and her computer from oldest to newest. One day, when 
 * practicing her counting skills, she noticed that some integers, 
 * when written in base 10 with no leading zeroes, have their 
 * digits sorted in non-decreasing order. Some examples of this 
 * are 8, 123, 555, and 224488. She decided to call these numbers 
 * tidy. 
 * Numbers that do not have this property, like 20, 321, 495 and 999990
 * are not tidy.
 * She just finished counting all positive integers in ascending order 
 * from 1 to N. What was the last tidy number she counted?
 * 
 * (i.e. what is the greatest number (1-n) that is 'tidy')
 */

// Lottery checks
/**
 * Google Code Jam 2019 - Qualification Round
 * Someone just won the Code Jam lottery, and we owe them N jamcoins! 
 * However, when we tried to print out an oversized check, we encountered 
 * a problem. The value of N, which is an integer, includes at least 
 * one digit that is a 4... and the 4 key on the keyboard of our 
 * oversized check printer is broken.
 * 
 * Fortunately, we have a workaround: we will send our winner 
 * two checks for positive integer amounts A and B, such that 
 * neither A nor B contains any digit that is a 4, and A + B = N. 
 * 
 * Please help us find any pair of values A and B that satisfy these conditions.
 * 
 * Your function should return the answer in the form of an array containing a and b
 * (return [a, b])
 * 
 * test inputs:
 * 4 -> 2 + 2
 * 4000 -> 2000 + 2000
 * 1234 -> 1232 + 2
 * 80416 = 80216 + 200      80416 - 80216 = b
 * 2048
 * 444,444,444,444 - 444 Billion ... 
 */

// Cookie Clicker
/**
 * Google Code Jam 2014 - Qualification Round
 * In this problem, you start with 0 cookies. You gain cookies 
 * at a rate of 2 cookies per second, by clicking on a giant 
 * cookie. Any time you have at least C cookies, you can buy 
 * a cookie farm. Every time you buy a cookie farm, it costs 
 * you C cookies and gives you an extra F cookies per second.
 * Once you have X cookies that you haven't spent on farms, you 
 * win! Figure out how long it will take you to win if you 
 * use the best possible strategy.
 * 
 * Suppose C=500.0, F=4.0 and X=2000.0. 
 * Here's how the best possible strategy plays out:
 * You start with 0 cookies, but producing 2 cookies per second.
 * After 250 seconds, you will have C=500 cookies and can buy a 
 * farm that produces F=4 cookies per second.
 * After buying the farm, you have 0 cookies, and your total 
 * cookie production is 6 cookies per second. The next farm 
 * will cost 500 cookies, which you can buy after about 
 * 83.3333333 seconds. 
 * After buying your second farm, you have 0 cookies, and 
 * your total cookie production is 10 cookies per second. 
 * Another farm will cost 500 cookies, which you can buy 
 * after 50 seconds. After buying your third farm, you 
 * have 0 cookies, and your total cookie production is 
 * 14 cookies per second. Another farm would cost 500 
 * cookies, but it actually makes sense not to buy it: 
 * instead you can just wait until you have X=2000 
 * cookies, which takes about 142.8571429 seconds. 
 * Total time: 
 * 250 + 83.3333333 + 50 + 142.8571429 = 526.1904762 seconds.
 * Notice that you get cookies continuously: so 0.1 seconds 
 * after the game starts you'll have 0.2 cookies, and π 
 * seconds after the game starts you'll have 2π cookies.
 */

// Googlerese
/**
 * Google Code Jam 2012 - Qualification Round
 * We have come up with the best possible language 
 * here at Google, called Googlerese. To translate text 
 * into Googlerese, we take any message and replace each 
 * English letter with another English letter. This mapping 
 * is one-to-one and onto, which means that the same input 
 * letter always gets replaced with the same output letter, 
 * and different input letters always get replaced with 
 * different output letters. A letter may be replaced by 
 * itself. Spaces are left as-is. 
 * For example (and here is a hint!), our awesome translation 
 * algorithm includes the following three mappings: 
 * 'a' -> 'y', 'o' -> 'e', and 'z' -> 'q'. This means 
 * that "a zoo" will become "y qee".
 * 
 * Googlerese is based on the best possible replacement 
 * mapping, and we will never change it. It will always be 
 * the same. In every test case. We will not tell you the 
 * rest of our mapping because that would make the problem 
 * too easy, but there are a few examples below that may help.
 * Given some text in Googlerese, can you translate it to 
 * back to normal text?
 * 
 * Sample
 * Input  	
 * ejp mysljylc kd kxveddknmc re jsicpdrysi
 * rbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcd
 * de kr kd eoya kw aej tysr re ujdr lkgc jv
 * 
 * Output 
 * Case #1: our language is impossible to understand
 * Case #2: there are twenty six factorial possibilities
 * Case #3: so it is okay if you want to just give up
 * */

/**
 * 
 * @param {*} n 
 * @returns 
 */
function nFactorialLoop(n) {
    let product = 1
    for (let i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

function nFactorial(n) {
    // recursive
    if (n == 1) { return n }
    return n * nFactorial(n - 1)
}


// n
// a = n-b
// b = n-a

// turn the number into an array
// iterate though the indeces
//  if