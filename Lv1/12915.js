function solution(strings, n) {
    var answer = [];
    var index = [];
    var count = strings.length;
    // 인덱스별 글자 추출
    for (var i = 0; i < strings.length; i++) {
        index[i] = strings[i][n];
    }
    // 추출한 글자 정렬
    index = index.sort();
    strings = strings.sort();
    // 원본 배열에 재배열된 인덱스 배열의 인덱스를 갖도록 재배치
    for (var i = 0; i < index.length; i++) {
        for (var j = 0; j < index.length; j++) {
            // string의 i번째 글자의 n번 index와 재배치한 index 배열의 i번째 글자가 같으면
            if (strings[j][n] === index[i]) {
                // answer에 넣고
                answer.push(strings[j]);
                // strings와 index에서는 해당 글자 삭제 (중복 방지)
                strings.splice(j, 1);
                // console.log(strings);
                break;
            }
        }
    }
    return answer;
}
