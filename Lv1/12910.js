function solution(arr, divisor) {
    // 정답을 넣을 배열 선언
    var answer = [];
    // 배열 전체에서
    for (var i = 0; i < arr.length; i++) {
        // divisor로 나눈 나머지가 0이면 (divisor로 나누어 떨어지면)
        if (arr[i] % divisor === 0) {
            // answer에 해당 값 추가
            answer.push(arr[i]);
        }
    }
    // answer를 오름차순 정렬
    answer = answer.sort((a, b) => a - b);
    // 만약 answer의 길이가 0일 경우 = 나누어 떨어지는 수가 하나도 없을 경우
    if (answer.length === 0) {
        // answer를 비우고
        answer.splice(0);
        // -1을 넣음
        answer.push(-1);
    }
    // 정답 출력
    return answer;
}
