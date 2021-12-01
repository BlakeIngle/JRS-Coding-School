// class Node {
//     value;
//     // next
//     left // other node
//     right // other node

//     constructor(value) {
//         this.value = value;
//     }
// }

// class Tree {
//     root // base/root node

//     insert(value) {
//         let node = new Node(value);

//         if (!this.root) {
//             // this is the new root
//             this.root = node;
//         } else {
//             this.makeChild(node, this.root)
//         }
//     }

//     makeChild(child, parent) {
//         // parent node already exists on the tree
//         // child is new node being inserted
//         if (child.value < parent.value) {
//             // node goes on the left
//             if (parent.left) {
//                 // there already is a node there
//                 this.makeChild(child, parent.left)
//             } else {
//                 // available space
//                 parent.left = child;
//             }
//         } else {
//             // node goes on the right
//             if (parent.right) {
//                 // no room
//                 this.makeChild(child, parent.right)
//             } else {
//                 parent.right = child;
//             }
//         }
//     }

//     findNode(value) {
//         return this.checkNode(this.root, value);
//     }

//     checkNode(parent, value) {
//         // if (parent.value == value) {
//         //     // we found the node
//         //     return parent;
//         // } else {
//         //     let foundNode = this.checkNode(parent.left, value);
//         //     // return foundNode ? foundNode : this.checkNode(parent.right, value)
//         //     if (foundNode) {
//         //         return foundNode;
//         //     } else {
//         //         return this.checkNode(parent.right, value);
//         //     }
//         // }
//         // return null;


//         let node = this.checkNode(parent.left, value)
//         if (node) {
//             return node;
//         }
//         node = this.checkNode(parent.right, value)
//         if (node) {
//             return node;
//         }
//         if (parent.value == value) {
//             return parent;
//         }
//     }
// }


// let tree = new Tree()
// tree.insert(4);
// tree.insert(2);
// tree.insert(5);

// tree.insert(1);
// tree.insert(3);
// tree.insert(7);

// console.log(tree.findNode(3))