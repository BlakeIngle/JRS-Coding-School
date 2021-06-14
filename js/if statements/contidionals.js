// AND - only true if both are true
// and && - double and
true && false // false
false && true // false
false && false // false
true && true // true !

// OR - true if either are true
// or || - double or
true || false // true
false || true // true
false || false // false
true || true // true

// 0 - false - in binary
// 1 - true - in binary

// single &
false & true

// single |
true | false

// single & and sing | will check both conditions
// no matter what. Even if one in the & is
// already false or one in the | is 
// already true;

a = 4;
b = 5;

if (a < 3 && a++ == 7) {
    //do something
}

a < b // true
a >= b // false
a % b == 1 // true