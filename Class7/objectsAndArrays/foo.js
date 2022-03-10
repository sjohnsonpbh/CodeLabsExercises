function foo(a) {
    var b = a + 2;

    function bar(c) {
        console.log(a, b, c);
    }

    bar(b * 2);
}

foo(3); // 3, 5, 10

function memoizedFibonacci(n, memo) {
    memo = memo || {}

    if (memo[n]) {
        return memo[n]
    }

    if (n <= 1) {
        return 1
    }

    return memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo)
}