function solution(array, commands) {
    var answer = [];
    var sol = [];
    // commands 길이에 따라 반복
    for (var i = 0; i < commands.length; i++) {
        // answer 배열을 commands 1,2번째 수에 따라 자르기
        answer = array.slice(commands[i][0] - 1, commands[i][1]);
        // 정렬
        answer = answer.sort();
        // commands[2]번째 수 출력
        console.log(typeof answer);
        // sol = answer[commands[i][2]];
    }

    return sol;
}
