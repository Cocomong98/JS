function solution(n) {
    var answer = 0;
    var input = String(n);
    answer = input.split("");
    answer = answer.sort((a, b) => a - b).reverse();
    answer = answer.join("");

    return Number(answer);
}
