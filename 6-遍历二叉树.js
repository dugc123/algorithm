function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 前序遍历
function preOrder(root) {
    if (root === null) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}
preOrder(a);
// 中序遍历
function inOrder(root) {
    if (root === null) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

inOrder(a);

// 后序遍历
function postOrder(root) {
    if (root === null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(a);