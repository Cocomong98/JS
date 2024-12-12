// 레벨테스트 문제
function solution(k, m, score) {
    var answer = 0;
    // 판매액은 박스 내 최저가 * 갯수
    // 최대 효율을 얻어내는 방법을 구하기

    // 박스 개수 구하기
    var boxes = Math.trunc(score.length / m);
    // 가격순으로 정렬
    var score = score.sort();
    var box = [];

    // 박스 개수만큼 반복해 박수를 나누기
    for (var i = 0; i < boxes; i++) {
        // 박스 나누기
        box = score.slice(score.length - m * (i + 1), score.length - m * i);
        answer += m * box[0];
    }
    return answer;
}
