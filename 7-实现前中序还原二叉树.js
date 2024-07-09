var qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
var zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
//var hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function f1(qian, zhong) {
    if (qian === null || zhong === null || qian.lenght === 0 || zhong.length === 0 || qian.length !== zhong.length) {
        return null;
    }
    let root = new Node(qian[0]); // 根节点
    let index = zhong.indexOf(root.value); // 找到根节点在中序遍历中的索引
    var qianLeft = qian.slice(1, 1 + index);
    var qianRight = qian.slice(1 + index, qian.length);
    var zhongLeft = zhong.slice(0, index);
    var zhongRight = zhong.slice(index + 1, zhong.length);
    root.left = f1(qianLeft, zhongLeft);
    root.right = f1(qianRight, zhongRight);
    return root;
}

var root = f1(qian, zhong);
console.log('root', root);