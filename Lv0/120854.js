function solution(strlist) {
    // 정답 배열
    var answer = [];
    // 정답 배열에 들어갈 글자 수를 담을 값
    var count = 0;
    // 주어진 배열만큼 반복
    for (var i = 0; i < strlist.length; i++) {
        // 해당 순번 (i번째)의 count는 해당 순번 단어의 문자 개수
        count = strlist[i].length;
        // count를 정답 배열에 추가
        answer.push(count);
    }
    // 정답 출력
    return answer;
}
