/**
 * 二叉树的左单旋：
 *  旋转节点：当前不平衡的节点
 *  新根：右子树的根节点
 *  变化分支：旋转节点的右子树的左子树
 *  不变化分枝：旋转节点的右子树的右子树
 */

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var node2 = new Node("2");
var node5 = new Node("5");
var node3 = new Node("3");
var node6 = new Node("6");

node2.right = node5;
node5.left = node3;
node5.right = node6;

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

console.log(isBalanced(node2));

/**
 * 修改二叉树为平衡二叉树
 */
function change(root) {//返回平衡之后的根节点
    if (isBalanced(root)) {
        return root;
    }
    if (root.left !== null) {
        root.left = change(root.left);
    }
    if (root.right !== null) {
        root.right = change(root.right);
    }
    var leftHeiht = getHeight(root.left);
    var rightHeiht = getHeight(root.right);
    if (Math.abs(leftHeiht - rightHeiht) < 2) {
        return true;
    } else if (leftHeiht > rightHeiht) {
        return rightSingleRotate(root);
    } else {
        return leftSingleRotate(root);
    }
}

/**
 * 左单旋
 */
function leftSingleRotate(root) {
    var newRoot = root.right; //新根
    root.right = newRoot.left; //旋转节点的右子树的左子树
    newRoot.left = root; //旋转节点
    return newRoot; //返回新根
}

/**
 * 右单旋
 */
function rightSingleRotate(root) {
    var newRoot = root.left; //新根
    root.left = newRoot.right; //旋转节点的右子树的左子树
    newRoot.right = root; //旋转节点
    return newRoot; //返回新根
}

var newRoot = change(node2);
console.log(newRoot);