function solution(numbers) {
    var sum = 0;
    var answer = -1;
    // 오름차순 정렬
    numbers = numbers.sort();
    // 배열 값을 모두 더해 sum에 넣기
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // 0~9의 합인 45에서 sum 값을 제외한 것이 정답

    answer = 45 - sum;
    return answer;
}
