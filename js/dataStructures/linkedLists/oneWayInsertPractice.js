class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
    }
}

let head = new Node(5);

let pointer = head;
pointer.next = new Node(3);
pointer = pointer.next
pointer.next = new Node(2);

// linked list of 3 nodes
// console.log(head)

// write some code that will create 1 new node with a random value 
//      Math.ceil(Math.random() * 10)
// and insert it into the linked list in the correct order

let value = Math.ceil(Math.random() * 10)
let newNode = new Node(value)

outputList(head);
console.log(value, " : new value\n")
insertNodeToList(newNode, head)

// output the head in the console
function outputList(head) {
    let pointer = head;
    while (true) {
        console.log(pointer.value)
        if (pointer.next) {
            pointer = pointer.next;
        } else {
            break;
        }
    }
}

function insertNodeToList(newNode, head) {
    // nothing exists to this function

    if (newNode.value > head.value) {
        // the new value is now the highest value
        newNode.next = head; // the new node is inserted to the list at the head - new acting head node
        head = newNode;
    } else {
        // then the node has to go somewhere in the list
        let pointer = head;
        while (true) {
            if (pointer.next) {
                if (newNode.value < pointer.next.value) {
                    // then move pointer
                    pointer = pointer.next
                } else {
                    // this is where the node belongs
                    newNode.next = pointer.next;
                    // two different nodes point to 'pointer.next'
                    pointer.next = newNode;
                    // hooks the newNode in to the middle of the list
                    break;
                }
            } else {
                // then the node goes at the end
                pointer.next = newNode;
                break;
            }
        }
    }

    outputList(head);
}