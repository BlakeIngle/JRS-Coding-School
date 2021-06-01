// write a program
// that has a node class
//      a node has a value and a 'next'
//      the value is a number
//      the next is another node

// the first thing that the program does is
// create a node object called 'head'
// with some value and does not have a 'next'

// then write a function that takes one parameter
// of a node and then creates a new node object
// that node is the first node's 'next' node value
//      the new node will have a random value
//      1 - 10  :  Math.ceil(Math.random() * 10)

// then write a loop that creates 9 more nodes to create
// a linked list of 10 total nodes

class Node {
    value;
    next;

    constructor(value) {
        this.value = value
    }
}

let head = new Node(9);

function makeNext(node) {
    // let value = Math.ceil(Math.random() * 10)
    // let newNode = new Node(value)

    // node.next = newNode;

    node.next = new Node(Math.ceil(Math.random() * 10))
}

// pointer = pointer.next
let pointer = head;

for (let i = 0; i < 9; i++) {
    makeNext(pointer)
    pointer = pointer.next
}


// console.log(head)

// write a 'function' that outputs the value
// of each node in the linked list
// on a new line

// 3     console.log(someNode.value)
// 7
// 2
// 7
// 3
// 1


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

outputList(head);
console.log("//////////")


pointer = head
pointer = pointer.next.next.next

/////////
// create a new node in the middle of my list

let newNode = new Node("new")
newNode.next = pointer.next; // hook up new node to the 'next'
pointer.next = newNode

outputList(head)