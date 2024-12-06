// /*
// 유클리드 호제법
// - 두 수의 차이로 정수의 최대공약수를 구하는 법

// 두 수를 나누고, 종료조건에 따라 숫자를 교체하는 걸 반복하는 식으로 계산
// */

// // 최대공약수 계산

// // a와b 입력받고
// function gcd(a, b) {
//     // b가 0이면 a가 최대공약수 (당연)
//     if (b === 0) return a;
//     // 그렇지 않으면, a/b의 나머지와 다시 계산
//     return gcd(b, a % b);
// }

// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    str = input[0];
});
