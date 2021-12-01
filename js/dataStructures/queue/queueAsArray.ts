class ArrayQueue {
    // arr[0] is the front
    private arr: any[];

    constructor() {
        this.arr = [];
    }

    /**
     * add an item to the queue
     */
    public push(item: any) {
        this.arr.push(item)
    }

    /**
     * take the next item off the queue (for use)
     * and return it
     */
    public pop(): any {
        if (this.isEmpty()) {
            return null;
        }
        var payload = this.arr[0];

        this.arr.splice(0, 1);

        return payload;
    }

    /**
     * look at the next item in the queue, 
     * do not remove it though
     * @returns the next item in the queue
     */
    public peek(): any {
        if (this.isEmpty()) {
            return null;
        }
        return this.arr[0];
    }

    public isEmpty(): boolean {
        return this.arr.length < 1
    }
}

var q = new ArrayQueue();

q.push(1)
q.push(2)
q.push(3)
console.log(q.pop());
q.push(4)
q.push(5)
q.push(6)
console.log(q.pop());
console.log(q.peek());
q.push(7)
q.push(8)
q.push(9)
console.log(q.pop());

console.log(q);

while (!q.isEmpty()) {
    q.pop();
}

console.log(q)