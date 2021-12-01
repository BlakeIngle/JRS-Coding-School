var root = {
    value: "Blake",
    left: {
        value: "Jazmin",
        left: {
            value: "Aly",
            left: {
                value: "Caroline",
                left: null,
                right: null
            },
            right: {
                value: "Tony",
                left: null,
                right: null
            }
        },
        right: {
            value: "Dane",
            left: {
                value: "Kristi",
                left: null,
                right: null
            },
            right: {
                value: "Daniel",
                left: null,
                right: null
            }
        }
    },
    right: {
        value: "Eugene",
        left: {
            value: "Sasha",
            left: {
                value: "Sylvia",
                left: null,
                right: null
            },
            right: {
                value: "Vince",
                left: null,
                right: null
            }
        },
        right: {
            value: "Nick",
            left: {
                value: "Lisa",
                left: null,
                right: null
            },
            right: {
                value: "Martin",
                left: null,
                right: null
            }
        }
    }
};
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(root) {
        this.root = root;
    }
    /**
     * Search the tree and return the first node that
     * matches the given value
     * @param value the value of the TreeNode to find
     */
    Tree.prototype.search = function (value) {
        var v = this.checkNode(root, value);
        return v;
    };
    Tree.prototype.bfs = function (value) {
        var queue = [this.root];
        return this.bfsRecursive(value, queue);
    };
    Tree.prototype.bfsRecursive = function (value, queue) {
        var node = queue.pop();
        if (node.value == value) {
            return node;
        }
        else {
            queue.unshift(node.left);
            queue.unshift(node.right);
            return this.bfsRecursive(value, queue);
        }
    };
    Tree.prototype.checkNode = function (node, value) {
        if (node.value == value) {
            // we found it!!!
            return node;
        }
        else {
            if (node.left) {
                var found = this.checkNode(node.left, value);
                if (found) {
                    return found;
                }
            }
            if (node.right) {
                var found = this.checkNode(node.right, value);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };
    return Tree;
}());
var tree = new Tree(root);
console.log(tree.bfs('Sasha'));
console.log(tree.bfs('Kristi'));
