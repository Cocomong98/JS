function solution(k, d) {
    var answer = 0;
    // 찍을 수 있는 모두 경우의 수 나열
    for (var i = 0; i <= d; i = i + k) {
        for (var j = 0; j <= d; j = j + k) {
            // 원점과의 거리보다 멀 경우에는 continue로 제외 (거리보다 멀다는 기준은?)
            if (i + j < d) continue;
            // 아닌 경우에는 count ++;
            answer++;
        }
    }

    return answer;
}
