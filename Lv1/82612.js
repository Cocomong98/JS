function solution(price, money, count) {
    var answer = -1;
    var total = 0;
    // 총 가격 계산
    for (var i = 1; i <= count; i++) {
        total += price * i;
    }
    // 가진 돈 보다 금액이 클 경우
    if (money - total < 0) {
        // 부족한 만큼 출력
        answer = total - money;
    }
    // 가진 돈이 충분한 경우
    else if (total - price > 0) {
        // 0 출력
        answer = 0;
    }

    return answer;
}
