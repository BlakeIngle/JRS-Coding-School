/**
 * Implement your code for the following functions. 
 * Do not change any code outside of the designated lines.
 * 
 * After implementing your code, execute your file using the node command.
 * 
 * A circularly linked list is a linked list where each node points to two other nodes
 *  the next node in the list and the previous node in the list.
 *  the tail node will point to the head as its 'next' property
 *  the head node will point to the tail as its 'prev' property
 *    ... <-> head <-> node2 <-> node3 <-> tail <-> head <-> ...
 * 
 * The expected output of this program is in the following format:
 * 
 * "The list does/does not contain a node with the value 7"
 * ***followed by a list of each node in the list***
 */

class ListNode {
    value; // the arbitrary value of the list
    next; // the next node in the list
    prev; // the previous node in the list
}
class CircularLinkedList {
    
    head; // the entry point of the list
    length; // the count of how many nodes are in the list

    // the head acts as the 'first' node and is always pointed to by the 'tail' node
    // NOTE: there is no need to keep track of a 'tail' node because the tail
    //      node will always be accessable as head.prev;

    constructor(head) {
        this.head = head;
        this.length = 1;
    }

    push(newValue) {
        // write a function that will accept some value as a parameter 
        // the function will insert a new node with that value into the linked list
        // NOTES:   - A list with only one node will not point to another next or prev.
        //          - the circularly linked list must remain circular
        //          - the 'last' node in the list will point to the head
        //              and the 'head' node will always point to the 'last' node
        //          - when a new node is inserted, the length will increase by 1
        /*********************************/
        // CODE GOES HERE //
        // hint: use a temp variable to prevent losing data.
        //      the linked list must not lose any data when the order of the list is changed.
        /*********************************/
    }
    
    pop(value) {
        // Write a function that will pop off the head node from the list
        //      (if no head node exists, return null)
        // then return the head node as the return value.

        /*********************************/
        // CODE GOES HERE //
        // hint: the linked list must not lose any data when a node is removed
        //      the length will decrease by 1 when a node is removed
        /*********************************/
    }
    
    search(value) {
        // Write a function that accepts a value as its parameter
        // the function will traverse the linked list in search of a node with that value
        //
        // if the function finds a valid node, the function will return that node
        // if no node is found, the function will return null
        //
        // the function will not change the list in any way

        /*********************************/
        // CODE GOES HERE //

        // hint: do not loop through the list infinitely.
        //      if you look at the 'tail' node (head.prev) then 
        //          you will be looking at the last node
        /*********************************/
    }

    isEmpty() {
        return this.length === 0;
    }

}

var list = new CircularLinkedList(new ListNode(Math.floor(Math.random() * 10)));

for(let i = 0; i < 10; i++) {
    list.push(Math.floor(Math.random() * 10))
}

var node = list.search(7);
console.log(`The list does${node ? "" : " not"} contain a node with the value 7`)

while (!list.isEmpty()) {
    console.log(list.pop());
}