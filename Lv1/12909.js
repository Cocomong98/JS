// 레벨테스트 문제

function solution(s) {
    var answer = true;
    var count = 0;

    // 문자열 s 안의 (와 )개수 체크
    for (var i = 0; i < s.length; i++) {
        // 첫 문자부터 )면 false
        if (s[0] == ")") {
            answer = false;
            break;
        }
        // (면 1 더하고 )면 1을 뺌
        if (s[i] == "(") {
            count++;
        } else if (s[i] == ")") {
            count--;
            if (count < 0) {
                answer = false;
                break;
            }
        }
    }
    if (count != 0) answer = false;

    return answer;
}
