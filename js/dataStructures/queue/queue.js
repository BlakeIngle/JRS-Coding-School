class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
    }
}

class Queue {

    head;
    tail;
    size;

    constructor() {
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
            this.size++;
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next;
            this.size++;
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else {
            let node = this.head
            this.head = this.head.next
            this.size--;
            return node.value;
        }
    }

    isEmpty() {
        return this.size == 0;
    }

}


let line = new Queue()

line.push('bob')
line.push('susan')

console.log(line.pop())
line.push('marcus')

console.log(line.pop())
console.log(line.pop())