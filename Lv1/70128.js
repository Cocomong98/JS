function solution(a, b) {
    var answer = 0;
    // 받은 문자열의 길이만큼 반복
    for (var i = 0; i < a.length; i++) {
        // 곱셈 수행
        answer += a[i] * b[i];
    }
    // 결과값 출력
    return answer;
}
