
class ListNode {
    value: any;
    next: ListNode;

    constructor(_value) {
        this.value = _value;
    }
}

class LinkedList {
    head: ListNode;
    tail: ListNode;
    length: number;

    constructor(node) {
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    isEmpty() {
        return this.length == 0;
    }

    push(newNode) {

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    pop() {
        let payload = this.head;

        if (this.isEmpty()) {
            return null;
        } else if (this.length == 1) {
            this.head = undefined;
            this.tail = undefined;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return payload;
    }

    remove(value: number): ListNode | null {
        if (this.isEmpty()) {
            return null;
        } else if (this.length == 1) {
            if (this.head.value == value) {
                return this.pop();
            }
        } else {
            // normal case: length > 1

            // find the node to be removed
            let pointer = this.head;
            // if it is the head -> pop
            if (pointer.value == value) {
                return this.pop();
            }

            while (pointer.next.value != value) {
                pointer = pointer.next;
            }

            if (pointer.next == this.tail) {
                this.tail = pointer;
            }

            pointer.next = pointer.next.next;
            this.length--;
        }
    }

}

//////////////////////////////////

let aisle = new LinkedList(new ListNode(9));


