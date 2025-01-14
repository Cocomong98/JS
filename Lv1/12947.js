// 나아진 해석이 존재할 시 수정
// for문 사용은 지양해야 함

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
