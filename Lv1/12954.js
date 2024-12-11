function solution(x, n) {
    var answer = [];
    var absx = Math.abs(x);
    // 아직 코드가 많이 더럽다
    for (var i = absx; i <= (absx * n || n - 1); i += absx || 1) {
        // 배열에 넣어야 하므로 push() 사용
        if (x < 0) {
            answer.push(i * -1);
        } else if (absx === 0) {
            answer.push(0);
        } else {
            answer.push(i);
        }
    }
    return answer;
}
