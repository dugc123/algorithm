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

function bfs(roots, target, path = []) { // path记录路径
    if (roots === null || roots.length === 0) {
        return false;
    }
    let nextNodes = [];
    for (let i = 0; i < roots.length; i++) {
        if (path.includes(roots[i])) { // 避免重复访问
            continue;
        }
        path.push(roots[i]);
        if (roots[i].val === target) {
            return true;
        }
        nextNodes = nextNodes.concat(roots[i].neighbors);
    }
    return bfs(nextNodes, target, path); // 递归
}
console.log(bfs([a], 'n'));