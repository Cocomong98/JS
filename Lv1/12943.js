function solution(num) {
    var answer = 0;

    // num이 1일 될 때 까지 반복
    while (num !== 1) {
        // 짝수인 경우 2로 나누기
        if (num % 2 === 0) {
            num = num / 2;
            answer++;
        }
        // 홀수인 경우 3을 곱하고 1을 더하기
        else if (num % 2 !== 0) {
            num = num * 3 + 1;
            answer++;
        }
        // 500회를 반복해도 안된다면 -1
        if (answer === 500) {
            answer = -1;
            break;
        }
    }
    return answer;
}
