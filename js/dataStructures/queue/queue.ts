class CustomNode {
    value: any;
    next: CustomNode;

    constructor(value: any) {
        this.value = value;
    }
}

class Queue {
    // not with an array
    private head: CustomNode;
    private tail: CustomNode;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public push(newCustomNode: CustomNode): void {
        if (this.isEmpty()) {
            this.head = newCustomNode;
        } else {
            this.tail.next = newCustomNode;
        }

        this.tail = newCustomNode;
        this.length++;
    }

    public peek(): CustomNode {
        return (this.isEmpty() ? null : this.head);
    }

    public pop(): CustomNode {
        if (this.isEmpty()) {
            return null;
        } else {
            var payload = this.head;
            this.head = this.head.next;
            this.length--;
            if (this.isEmpty()) {
                this.head = null; // redundant
                this.tail = null;
            }
            return payload;
        }
    }

    public isEmpty(): boolean {
        return this.length == 0;
    }

    public log() {
        console.log(this)
    }
}

testQueue();

function testQueue() {
    console.log("initialize queue")
    var q = new Queue();
    q.log();
    var n1 = new CustomNode(1);
    console.log("push 1")
    q.push(n1);
    q.log();
    console.log("peeking", q.peek());
    console.log("popping 1:", q.pop());

    var n2 = new CustomNode(2);
    var n3 = new CustomNode(3);
    var n4 = new CustomNode(4);
    console.log("pushing 2")
    q.push(n2)
    q.log();
    console.log("pushing 3")
    q.push(n3);
    q.log();

    console.log("popping 2")
    q.pop();
    q.log();
    console.log("pushing 4")
    q.push(n4);
    q.log();

    console.log("popping all")
    while (!q.isEmpty()) {
        console.log(q.pop());
    }

    q.log();

    console.log("finished")
}