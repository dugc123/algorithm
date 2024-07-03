
function Stack() {
    this.arr = [];
    this.push = function (item) {
        this.arr.push(item);
    }
    this.pop = function () {
        return this.arr.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('stack.arr',stack.arr)
console.log('stack.pop()',stack.pop())

function Queue() {
    this.arr = [];
    this.push = function (item) {
        this.arr.push(item);
    }
    this.pop = function () {
        return this.arr.shift();
    }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log('queue.arr',queue.arr)
console.log('queue.pop()',queue.pop())