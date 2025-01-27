function solution(food) {
    var answer = "",
        ans1 = "",
        ans2 = "";
    // 음식 짝수개수 조정
    for (var i = 1; i < food.length; i++) {
        // 1,2,3번 음식이 모두 짝수 개인 경우
        if (food[i] % 2 === 0) {
            // 문제없이 진행
            food[i] = String(food[i]);
        }
        // 그렇지 않은 경우
        else {
            // 그 음식은 그대로 사용하지 못하므로 1개 제거
            food[i] = food[i] - 1;
            food[i] = String(food[i]);
        }
    }
    // 순서대로 배열된 절반을 ans1에 저장
    for (var i = 1; i < food.legnth; i++) {
        var half = food[i].length / 2;
        ans1 += food[i].splice(0, half);
    }
    // ans1를 정반대로 뒤집은 ans2를 생성 (내림차순 정렬로 뒤집기)
    //ans2 = ans1.sort((a,b) => b-a);
    // ans1 + 0 + ans2로 answer 완성
    answer = ans1 + "0" + ans2;

    return answer;
}
