function Node(val) {
    this.val = val;
    this.neighbors = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

a.neighbors = [b, c];
b.neighbors = [a, c, d];
c.neighbors = [a, b, d];
d.neighbors = [b, c, e];
e.neighbors = [d];

function dfs(node, target, path = []) {
    if(node === null) return false;
    if (path.includes(node)) { // 如果路径中已经存在该节点，说明已经访问过，直接返回false
        return false;
        
    }
    if(node.val === target) return true;
    path.push(node); // 将当前节点加入路径
    let result = false;
    for (let i = 0; i < node.neighbors.length; i++) {
        result = dfs(node.neighbors[i], target, path);
        if (result) {
            break;
        }
    }
    return result;
}

console.log(dfs(a, 'n'));
