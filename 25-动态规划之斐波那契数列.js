function fib(n) {
    if (n <= 1) {
        return 0;
    } else if (n <= 2) {
        return 1;
    };
    var a = 0, b = 1, c;
    //0 1 1 2 3 5 8 13
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(fib(7));

function fib2(n) {
    if (n <= 2) {
        return 1;
    }
    return fib2(n - 1) + fib2(n - 2);
}

// console.log(fib2(7));