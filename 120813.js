function solution(n) {
    // 빈 배열 만들고
    var answer = [];

    // 1부터 2씩 증가 (홀수만)
    for (var i = 1; i <= n; i += 2) {
        // 순서대로 빈 배열에 담기
        answer.push(i);
    }

    return answer;
}
