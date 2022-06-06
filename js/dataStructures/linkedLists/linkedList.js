// class Node {
//     value;
//     next;

//     constructor(value) {
//         this.value = value;
//     }
// }

// class LinkedList {
//     head; // the start/head node
//     pointer; // private
//     tail; // last node
//     length; // starts at 0

//     constructor(node) {
//         // this is the starting state
//         this.head = node;
//         this.pointer = node;
//         this.tail = node;
//         this.length = 1;
//     }

//     // functions to work with the linked list
//     // instert node into list
//     insertvalueToList(value) {
//         let newNode = new Node(value)

//         if (this.length == 0) {
//             this.head = newNode
//             this.tail = newNode
//             this.pointer = newNode
//             this.length = 1;
//             return;
//         }

//         if (newNode.value > this.head.value) {
//             // the new value is now the highest value
//             newNode.next = this.head; // the new node is inserted to the list at the head - new acting head node
//             this.head = newNode;
//         } else {
//             // then the node has to go somewhere in the list
//             this.pointer = this.head;
//             while (true) {
//                 if (this.pointer.next) {
//                     if (newNode.value < this.pointer.next.value) {
//                         // then move pointer
//                         this.pointer = this.pointer.next
//                     } else {
//                         // this is where the node belongs
//                         newNode.next = this.pointer.next;
//                         // two different nodes point to 'pointer.next'
//                         this.pointer.next = newNode;
//                         this.length++;
//                         break;
//                     }
//                 } else {
//                     // then the node goes at the end
//                     this.pointer.next = newNode;
//                     this.tail = newNode;
//                     this.length++;
//                     break;
//                 }
//             }
//         }
//     }

//     // delete
//     deleteNodeByValue(value) {
//         if (this.length == 0) {
//             console.log("Cannot delete. Linked list is empty.")
//             return;
//         }
//         // search for a node and delete the one with that value
//         this.pointer = this.head

//         if (value == this.head.value) {
//             // remove the head node
//             this.head = this.head.next // move the head pointer over 
//             if (this.length == 1) {
//                 // deleting last node
//                 this.tail = this.head;
//             }
//             this.length--;
//             this.pointer = this.head;
//         } else {
//             while (true) {
//                 if (value == this.pointer.next.value) {
//                     if (this.pointer.next == this.tail) {
//                         // move tail
//                         this.tail = this.pointer;
//                     }
//                     // remove the 'next' node
//                     this.pointer.next = this.pointer.next.next;
//                     this.length--;
//                     break;
//                 } else {
//                     this.pointer = this.pointer.next
//                 }
//             }
//         }
//     }

//     // search
//     search(value) {
//         if (this.length == 0) {
//             return null;
//         } else if (value == this.head.value) {
//             return this.head
//         } else {
//             this.pointer = this.head;
//             while (true) {
//                 if (value == this.pointer.value) {
//                     return this.pointer;
//                 } else if (this.pointer.next) {
//                     this.pointer = this.pointer.next
//                 } else {
//                     break;
//                 }
//             }
//         }
//     }

//     // output the whole list
//     print() {
//         this.pointer = this.head;
//         while (true) {
//             console.log(this.pointer.value)
//             if (this.pointer.next) {
//                 this.pointer = this.pointer.next;
//             } else {
//                 break;
//             }
//         }
//     }

// }

// let firstNode = new Node(50);
// let myList = new LinkedList(firstNode);

// myList.deleteNodeByValue(50)

// myList.insertNodeToList(new Node(25))