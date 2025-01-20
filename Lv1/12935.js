function solution(arr) {
    var answer = [];
    // arr을 answer안에 넣기
    answer = arr;
    // 배열 안의 수가 1개인 경우, -1로 대체
    if (answer.length === 1) {
        // console.log("잘 넘어옴");
        answer.splice(0, 1, -1);
    } else {
        // 그렇지 않은 경우, 가장 작은 수를 찾아 제거
        var min = Math.min.apply(null, arr);
        for (var i = 0; i < answer.length; i++) {
            if (min === answer[i]) {
                answer.splice(i, 1);
                i--;
            }
        }
    }

    return answer;
}
