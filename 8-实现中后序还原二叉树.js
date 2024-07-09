// var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function fn(zhong, hou) {
    if (hou === null || zhong === null || hou.lenght === 0 || zhong.length === 0 || hou.length !== zhong.length) {
        return null;
    }
    var root = new Node(hou[hou.length - 1]);
    var index = zhong.indexOf(root.value); // 找到根节点在中序遍历的位置
    var zhongLeft = zhong.slice(0, index); // 中序遍历的左子树
    var zhongRight = zhong.slice(index + 1, zhong.length); // 中序遍历的右子树
    var houLeft = hou.slice(0, index); // 后序遍历的左子树
    var houRight = hou.slice(index, hou.length - 1); // 后序遍历的右子树
    root.left = fn(zhongLeft, houLeft);
    root.right = fn(zhongRight, houRight);
    return root;
}

var root = fn(zhong, hou);
console.log(root);