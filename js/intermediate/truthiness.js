
function checkTruthiness(value) {

    // if (value) {
    //     console.log(value + " is true")
    // } else {
    //     console.log(value + " is false")
    // }

    // value ? "true" : "false"
    // Boolean(value);
    !!value

    console.log(value, "\tis " + !!value + (value === " " ? " (value: ' ' space character)" : ""))
}






checkTruthiness(true);
checkTruthiness(1 < 3);
checkTruthiness(true || false);
checkTruthiness(1);
checkTruthiness(45.23);
checkTruthiness(-1);
checkTruthiness(-45.23);
checkTruthiness(Math.PI);
checkTruthiness(-Math.PI);
checkTruthiness(BigInt('9876543456775467'));
checkTruthiness(12n);
checkTruthiness(-12n);
checkTruthiness(Infinity);
checkTruthiness(-Infinity);
checkTruthiness({});
checkTruthiness({ prop: 1 });
checkTruthiness([]);
checkTruthiness([1, 2, 3]);
checkTruthiness("string");
checkTruthiness(" ");
checkTruthiness(() => { })
console.log("------------------")
checkTruthiness(false);
checkTruthiness(false === true);
checkTruthiness(false && true);
checkTruthiness(0);
checkTruthiness(-0);
checkTruthiness(0n);
checkTruthiness(-0n);
checkTruthiness("");
checkTruthiness(null);
checkTruthiness(undefined);
var a;
checkTruthiness(a);
checkTruthiness(4 * "a");
checkTruthiness(NaN);
