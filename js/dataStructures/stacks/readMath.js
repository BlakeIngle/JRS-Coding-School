class Stack {

    items; // the array that is our stack
    top; // the index of the top item
    size; // how big the stack is

    constructor() {
        this.items = []; // an array
        this.top = -1;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size == 0
    }

    // push
    push(item) {
        this.items.push(item);
        this.top++;
        this.size++;
    }

    // pop
    pop() {
        if (this.isEmpty()) {
            // then it is empty
            return null;
        } else {
            let item = this.items[this.top];
            this.items.pop();
            this.size--;
            this.top--;
            return item;
        }
    }

    // peek
    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items[this.top];
        }
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a math equation.\n", (equation) => {
    ///////////////
    let numbers = new Stack();
    let operators = new Stack();
    // write code that pushes each non-space character
    // into the stack

    // then console.log() each item in the stack
    ///////////////////////// then
    // write some code that pushes each number into the 
    // number stack
    // and pushed each operator into the operators 
    // stack (+ - * /)
    ///////////////
    for (let i = 0; i < equation.length; i++) {
        let char = equation.charAt(i)
        switch (char) {
            case " ":
            case "(":
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                operators.push(char)
                break;
            case ")":
                // pop off two numbers and one operator
                // evaluate them and push the result onto the 
                // numbers stack
                let n1 = numbers.pop()
                let n2 = numbers.pop();
                let result;

                //evaluate the result
                switch (operators.pop()) {
                    case "+":
                        result = Number(n2) + Number(n1);
                        break;
                    case "-":
                        result = n2 - n1
                        break;
                    case "*":
                        result = n2 * n1
                        break;
                    case "/":
                        result = n2 / n1
                        break;
                }

                numbers.push(result);
                break;
            default:
                numbers.push(char);
                break;
        }
    }

    console.log(numbers.pop()) // the final result

    ///////////////
    rl.close();
});

rl.on("close", () => {
    process.exit();
})



    (3 + 4) * 2

// numbers:    14
// operators:  