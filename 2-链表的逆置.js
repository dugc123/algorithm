function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function nizhi(root) {
    if (root.next.next === null) {//代表当前节点是倒数第二个节点
        root.next.next = root; //让最后一个节点指向自己(倒数第二个节点)
        return root.next;
    } else {
        var temp = nizhi(root.next);
        root.next.next = root;
        root.next = null;
        return temp;
    }
}
var res = nizhi(node1);
function bianli(root) {
    if (root === null) {
        return;
    }
    console.log('root.value',root.value)
    bianli(root.next);
}
bianli(res);
// function reverseLinkedList(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     var pre = null, cur = head, next = null;
//     while (cur) {
//         next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
//     return pre;
// }