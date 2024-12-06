const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
var ans = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    str = input[0];
    for (var key in str) {
        // 대문자와 같으면 그대로, 다르면 소문자로
        ans.push(str[key] === str[key].toUpperCase() ? str[key].toLowerCase() : str[key].toUpperCase());
    }
    const result = ans.join("");
    console.log(result);
});
