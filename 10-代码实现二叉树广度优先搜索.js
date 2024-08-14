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

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function bfs(roots, target) {
    // console.log(roots);
    if (roots === null || roots.length === 0) return false;
    let childList = []; //当前层所有节点的子节点
    for (var i = 0; i < roots.length; i++) {
        // console.log(roots[i].value);
        if (roots[i] !== null && roots[i].value === target) {
            return true;
        } else if (roots[i] !== null) {
            childList.push(roots[i].left);
            childList.push(roots[i].right);
        }
    }
    return bfs(childList, target);
}

console.log(bfs([a], "m"));