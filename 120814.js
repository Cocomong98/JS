function solution(n) {
    if (n % 7 === 0) {
        var answer = n / 7;
    } else {
        var answer = Math.trunc(n / 7) + 1;
    }
    // 7명 = 1판

    return answer;
}
