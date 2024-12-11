function solution(array) {
    let answer = 0;

    // 그냥 sort를 쓰면 크기에 관계없는 것이 나옴
    // 그래서 크기를 비교하는 (a, b) => a - b 를 사용
    // 해당 작업은 오류가 없을 때 까지 반복함
    array = array.sort((a, b) => a - b);

    answer = array[(array.length - 1) / 2];
    answer = array[Math.floor(array.length / 2)];

    return answer;
}
