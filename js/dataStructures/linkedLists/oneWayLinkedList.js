// write a program that represents a linked list

// let node = {
//     instructions: "blah blah blah",
//     nextThing: another node
// }

class Node {
    value // string
    next // another node -> next: Node

    constructor(value) {
        this.value = value;
    }
}

let first = new Node(17)
let second = new Node(5)
let third = new Node(23)
let fourth = new Node(26)

first.next = second
second.next = third
third.next = fourth






//   O  ->  O  ->  O  ->  O

let head = first
let tail = fourth
let pointer = head


//  pointer
//   |
//   O  ->  O  ->  O  ->  O
//   |                    |
//  head                tail

function doSomething() {
    // do something
}

doSomething();
// then move the pointer to the next and do something again

// pointer
//   |
//   O  ->  O  ->  O  ->  O
//   |                    |
//  head                tail

pointer = pointer.next

//       pointer 
//          |
//   O  ->  O  ->  O  ->  O 
//   |                    |
//  head                tail