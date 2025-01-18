function solution(num_list, n) {
    var answer = 0;
    for (keys in num_list) {
        if (num_list[keys] === n) answer = 1;
    }
    return answer;
}
