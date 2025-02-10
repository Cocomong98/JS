function solution(n) {
    var answer = 0;
    // 짝수일 떄
    if (n % 2 === 0) {
        for (var i = 0; i <= n; i += 2) {
            answer += i * i;
        }
    }
    // 홀수일 떄
    else {
        for (var i = 1; i <= n; i += 2) {
            answer += i;
        }
    }
    return answer;
}
