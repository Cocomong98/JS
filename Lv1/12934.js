function solution(n) {
    // n에 루트를 씌운 값을 answer라 함
    var answer = Math.sqrt(n);
    // answer의 값이 정수이면 제곱수이므로, answer+1을 제곱한 값을 출력
    // 소수점을 버린 값과 원본을 비교해 정수인지 확인
    if (answer === Math.floor(answer)) {
        answer = (answer + 1) * (answer + 1);
    }
    // 그렇지 않다면 -1을 출력
    else {
        answer = -1;
    }
    return answer;
}
