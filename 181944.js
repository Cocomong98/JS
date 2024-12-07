const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    n = Number(input[0]);
    // 짝수인 경우
    if (n % 2 === 0) {
        console.log(n + " is even");
    }
    // 홀수인 경우
    else {
        console.log(n + " is odd");
    }
});
