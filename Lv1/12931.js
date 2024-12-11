function solution(n) {
    // 받은 숫자를 문자열로 변환
    var str = n.toString();
    // answer는 숫자
    var answer = 0;

    // 변환한 문자열만큼 반복
    for (var i = 0; i < str.length; i++) {
        // 하나씩 잘라 숫자로 변환한 후 더하기
        answer += Number(str.slice(i, i + 1));
    }

    // 결과 출력
    return answer;
}
