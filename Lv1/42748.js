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

// ========================================================================

function solution(array, commands) {
    var sol = [];

    for (var i = 0; i < commands.length; i++) {
        // 배열 자르기
        let answer = array.slice(commands[i][0] - 1, commands[i][1]);

        // 숫자 정렬
        answer.sort((a, b) => a - b);

        // k번째 숫자 추가 (배열은 0-based 인덱스이므로 -1 해줘야 함)
        sol.push(answer[commands[i][2] - 1]);
    }

    return sol;
}
