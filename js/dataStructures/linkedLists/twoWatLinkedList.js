class Node {
    value; // the value
    next; // the next node in the list
    prev; // the prev node in the list
}

class DoublyLinkedList {
    head;
    tail;
    length;

    constructor(value) {
        let newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1;
    }

    insertValueToList(value) {
        let newNode = new Node(value);

        if (newNode.value > this.head.value) {
            // the new value is now the highest value
            newNode.next = this.head; // the new node is inserted to the list at the head - new acting head node
            this.head = newNode;
        } else {
            // then the node has to go somewhere in the list
            let pointer = this.head;
            while (true) {
                if (pointer) {
                    if (newNode.value < pointer.value) {
                        // then move pointer
                        pointer = pointer.next
                    } else {
                        // this is where the node belongs
                        // a new node goes on the left
                        newNode.next = pointer;
                        newNode.prev = pointer.prev;
                        newNode.prev.next = newNode;
                        pointer.prev = newNode;
                    }
                } else {
                    // then the node goes at the end
                    pointer.next = newNode;
                    this.tail = newNode;
                    this.length++;
                    break;
                }
            }
        }
    }

    print() {
        let pointer = this.head;
        while (this.length > 0) {
            console.log(pointer.value)
            if (pointer.next) {
                pointer = pointer.next;
            } else {
                break;
            }
        }
    }
}