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

/**
 * 广度优先搜索
 */
function bfs(root) {
    var queue = []; // 队列
    queue.push(root); // 将根节点入队
    while (queue.length > 0) {
        // 出队一个元素
        const node = queue.shift();
        console.log(node.value);
        for (let i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
}
bfs(a);