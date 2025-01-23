function solution(absolutes, signs) {
    var answer = 0;
    for (var i = 0; i < absolutes.length; i++) {
        // sign이 참이면 그냥 더하고
        if (signs[i] === true) {
            answer += absolutes[i];
        }
        // false이면 음수로 변환 후 더하기
        else {
            answer += absolutes[i] * -1;
        }
    }
    return answer;
}
