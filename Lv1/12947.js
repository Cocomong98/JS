function solution(x) {
    var answer = true;
    var str = String(x);
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    if (x % sum === 0) {
    } else {
        answer = false;
    }

    return answer;
}
