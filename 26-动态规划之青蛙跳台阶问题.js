// 一个青蛙，一次只能跳1个台阶或者2个台阶，问跳上n个台阶有多少种跳法
// 1. 递归
function jumpFloor(number) {
    if (number <= 2) return number;
    //1 2 3 5 8 13 21 34
    return jumpFloor(number - 1) + jumpFloor(number - 2);
}
console.log(jumpFloor(30));
// 2. 动态规划
function jumpFloor1(number) {
    if (number <= 2) return number;
    let dp = [0, 1, 2];
    for (let i = 3; i <= number; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[number];
}   
console.log(jumpFloor1(30));
