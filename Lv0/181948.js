const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("close", function () {
    // 백슬래쉬 출력 => //(연속 2번 사용시 1개 출력)
    const ans = `!@#$%^&*(\\'"<>?:;`;
    console.log(ans);
});
