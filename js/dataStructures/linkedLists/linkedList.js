class Node {
    value;
    nextNode;

    constructor(value) {
        this.value = value;
    }

    link(node) {
        this.nextNode = node;
    }
}

class LinkedList {

    length;
    head; // node
    tail; // node

    constructor() {
        this.length = 0;
    }

    insert(value) {

        let newNode = new Node(value);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            if (newNode.value <= this.head.value) {
                newNode.link(this.head);
                this.head = newNode;
            } else if (newNode.value >= this.tail.value) {
                this.tail.link(newNode);
                this.tail = newNode;
            } else {
                // insert node into middle of list
                let pointer = this.head;
                while (true) {
                    if (pointer.nextNode.value >= newNode.value) {
                        // inject here
                        newNode.link(pointer.nextNode);
                        pointer.link(newNode);
                        break;
                    } else {
                        pointer = pointer.nextNode;
                    }
                }
            }
        }

        this.length++;
    }

    remove(value) {
        if (this.length == 0) {
            return;
        } else if (this.length == 1) {
            if (value == this.head.value) {
                this.head = undefined;
                this.tail = undefined;
                this.length = 0;
            }
            return;
        } else {
            if (value == this.head.value) {
                // 1 - remove head
                this.head = this.head.nextNode;
                this.length--;
                return;
            }

            let pointer = this.head;
            while (pointer != this.tail) {

                if (value == pointer.nextNode.value) {
                    if (pointer.nextNode == this.tail) {
                        // 3 - remove the tail
                        this.tail = pointer;
                    }
                    // 2 - remove middle node
                    pointer.link(pointer.nextNode.nextNode);
                    this.length--;
                    return;
                }
                pointer = pointer.nextNode;
            }
            // 4 - node not found
            return;
        }
    }

    find(value) {
        let pointer = this.head;
        while (pointer != undefined) {
            if (pointer.value == value) {
                return true;
            }
            pointer = pointer.nextNode;
        }
        return false;
    }

    print() {
        if (this.length == 0) {
            console.log('--- The list is empty ---');
            return;
        }
        let pointer = this.head;
        while (pointer != undefined) {
            console.log(pointer.value, '->');
            pointer = pointer.nextNode;
        }
        console.log("--- end of list ---");
    }

}

let list = new LinkedList();
list.print();

list.insert(5);
list.print();

list.insert(8);
list.print();

list.insert(6);
list.print();

list.insert(1);
list.print();

list.insert(10);
list.print();

// console.log(list.find(1));
// console.log(list.find(5));
// console.log(list.find(10));
// console.log(list.find(100000));


list.remove(14);
list.print();

list.remove(10);
list.print();

list.remove(1);
list.print();

list.remove(8);
list.print();

list.remove(6);
list.print();

list.remove(5);
list.print();

list.remove(5);
list.print();

