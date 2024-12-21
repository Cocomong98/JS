function solution(s) {
    var answer = false;
    var string;

    var pcount = 0,
        ycount = 0;
    answer = s.toUpperCase();
    for (key in answer) {
        if (answer[key] === "Y") ycount++;
        else if (answer[key] === "P") pcount++;
    }

    if (pcount === ycount) answer = true;
    else answer = false;

    return answer;
}
