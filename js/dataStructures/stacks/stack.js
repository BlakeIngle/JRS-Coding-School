class Stack {

    items; // the array that is our stack
    top; // the index of the top item
    size; // how big the stack is

    constructor() {
        this.stack = [];
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