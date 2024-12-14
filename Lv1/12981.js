function solution(n, words) {
    var answer = 0;
    var clear = [];
    var count = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for (var i = 0; i < words.length - 1; i++) {
        // 해당 단어의 끝글자
        var last = words[i][words[i].length - 1];
        // 다음 단어의 첫글자
        var first = words[i + 1][0];

        // 끝말잇기가 가능한 경우
        if (last === first) {
            // 이미 나왔던 단어가 나오는 경우
            if (clear.includes(words[i])) {
                console.log("발견" + words[i]);
                break;
            }
            // 아니라면 통과목록 배열에 넣음
            clear += words[i];
            // 사람 수 증가
            count++;
        }

        // 글자가 일치하지 않는 경우
        else {
            break;
            answer = count % n;
        }
    }

    return answer;
}

//////////////////////////////////////////////////////////////////////////////////////////

function solution(n, words) {
    var answer = [0, 0]; // [사람 번호, 차례]
    var clear = []; // 이미 말한 단어를 저장하는 배열

    for (var i = 0; i < words.length; i++) {
        var current = words[i]; // 현재 단어
        var prev = i > 0 ? words[i - 1] : ""; // 이전 단어

        // 끝말잇기 규칙 위반 또는 중복 단어 발견
        if (
            (i > 0 && prev[prev.length - 1] !== current[0]) || // 끝말잇기 규칙 위반
            clear.includes(current) // 중복 단어 발견
        ) {
            // 사람 번호와 차례 계산
            var person = (i % n) + 1;
            var turn = Math.floor(i / n) + 1;
            answer = [person, turn];
            break;
        }

        // 단어를 기록
        clear.push(current);
    }

    return answer;
}
