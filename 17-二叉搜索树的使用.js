var arr = [];
for (let i = 0; i < 1000; i++) {
    arr[i] = Math.floor(Math.random() * 1000);
}


function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

let num = 0;
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
    num++;
    var root = new TreeNode(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i])
    }
    return root;
}

var root = buildTree(arr);

function searchNode(root, value) {
    if (root === null) {
        return false;
    } 
    if (root.value === value) {
        return true;
    }
    if (value < root.value) { // 目标值小于当前节点，则递归左子树
        return searchNode(root.left, value);
    } else { // 目标值大于当前节点，则递归右子树
        return searchNode(root.right, value);
    }
}
console.log(searchNode(root, 432), num)