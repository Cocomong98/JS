function solution(s) {
    var keyword;
    var keycount = 0,
        count = 0;
    var answer = 0;
    while (i < s.length) {}
    for (var i = 0; i < s.length; i++) {
        // 첫 글자를 키워드로 등록
        if (i === 0) {
            keyword = s[0];
            keycount++;
            continue;
        }
        // 키워드와 현재 글자가 동일할 때 -> keycount 수 증가
        if (keyword === s[i]) {
            keycount++;
        }
        // 키워드와 현재 글자가 다를 때 -> count 수 증가
        else {
            count++;
        }
        // 두 count가 같은 경우 종료 후 분열
        if (keycount === count) {
            answer++;
            break;
        }
    }

    return answer;
}
