var arr = [];
for (let i = 0; i < 1000; i++) {
    arr[i] = Math.floor(Math.random() * 1000);
}


function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, value) {
    if (root.value > value) { // 目标值小于当前节点，则插入左子树
        if (root.left == null) { // 左子树为空，则直接插入
            root.left = new TreeNode(value);
        } else { // 左子树不为空，则继续递归
            addNode(root.left, value);
        }
    } else {
        if (root.right == null) {
            root.right = new TreeNode(value);
        } else {
            addNode(root.right, value);
        }
    }
    return root;
}
function buildTree(arr) {
    if (arr === null || arr.length === 0) {
        return null;
    }
    var root = new TreeNode(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root;
}

var root = buildTree(arr);
console.log(root);