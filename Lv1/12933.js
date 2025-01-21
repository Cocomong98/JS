function solution(n) {
    var answer = 0;
    var input = String(n);
    // 받은 문자열을 개별적으로 나누기
    answer = input.split("");
    // 크기순 정렬 후, 역순으로 재배치
    answer = answer.sort((a, b) => a - b).reverse();
    // 하나의 문자로 만들기
    answer = answer.join("");
    // 숫자 형식으로 리턴
    return Number(answer);
}
