function solution(array) {
    let answer = 0;

    array = array.sort((a, b) => a - b);

    answer = array[(array.length - 1) / 2];

    return answer;
}
