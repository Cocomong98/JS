function solution(seoul) {
    var answer = "";
    // seoul의 배열만큼 반복
    for (keys in seoul) {
        // Kim을 찾으면
        if (seoul[keys] === "Kim") {
            // index를 반환하며 답변 완성
            answer = "김서방은 " + keys + "에 있다";
        }
    }
    return answer;
}
