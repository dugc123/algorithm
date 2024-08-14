function Node(value) {
    this.value = value;
    this.children = []; // 存储子节点
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");

a.children.push(b);
a.children.push(c);
a.children.push(f);
b.children.push(d);
b.children.push(e);

function dfs(node, target) {
    if (node === null) {
        return;
    }
    if (node.value === target) {
        return true;
    }
    let result = false;
    for (let i = 0; i < node.children.length; i++) {
        result = dfs(node.children[i], target);
        if (result) {
            break;
        }
    }
    return result;
}

console.log(dfs(a, 'f'));