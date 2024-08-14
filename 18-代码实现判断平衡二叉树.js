/**
 * 平衡二叉树：
 * 1. 左子树和右子树的高度差不能大于1
 * 2. 左子树和右子树都是平衡二叉树
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");
var h = new Node("h");
var j = new Node("j");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
d.right = h;
e.right = j;

/**
 * 获取二叉树的深度
 */
function getHeight(root) {
    if (!root) {
        return 0;
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

/**
 * 是否是平衡二叉树
 */
function isBalanced(root) {
    if (!root) {
        return true;
    }
    var leftHeight = getHeight(root.left);
    var rightHeight = getHeight(root.right);
    var diff = Math.abs(leftHeight - rightHeight);
    if (diff > 1) {
        return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
}

console.log(isBalanced(a));