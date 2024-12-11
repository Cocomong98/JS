function solution(numbers) {
    var answer = [];

    // 배열의 내용을 두배로 해서 원본 배열에 다시 넣기
    for (var keys in numbers) {
        answer[keys] = numbers[keys] * 2;
    }

    // reduce 를 사용할수도, map을 사용할수도 있음
    answer = numbers.reduce((a, b) => [...a, b * 2], []);

    // map 사용
    answer = numbers.map((b) => b * 2);

    return answer;
}
