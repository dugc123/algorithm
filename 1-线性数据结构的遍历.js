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

/**
 * 链表循环遍历
 * @param {*} root 
 */
function bianli(root) {
    var temp = root;
    while(true) {
        if (temp !== null) {
            console.log('temp.value',temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}

bianli(node1);


/**
 * 链表递归遍历
 */
function bianli2(root) {
    if (root !== null) {
        console.log('root.value', root.value);
        bianli2(root.next);
    } else {
        return;
    }
}

bianli2(node1);

