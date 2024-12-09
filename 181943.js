function solution(my_string, overwrite_string, s) {
    var answer = "";
    // s + 붙여넣을 배열 길이 < 원본 배열 길이 -> 붙여넣은 후 남은 원본배열 붙임
    if (overwrite_string.length + s < my_string.length) {
        answer =
            // 0~s 까지 원본 배열
            my_string.slice(0, s) +
            // 그 이후 붙여넣을 배열
            overwrite_string.slice(0, overwrite_string.length + 1) +
            // 원본 배열 중, s + 붙여넣은 배열 길이부터 끝까지
            my_string.slice(overwrite_string.length + 2, my_string.length);
    }
    // s + 붙여넣을 배열 길이 > 원본 배열 길이 -> 붙여넣은 후 출력
    else {
        answer =
            // 0~s 까지 원본배열
            my_string.slice(0, s) +
            // 그 이후 붙여넣을 배열
            overwrite_string.slice(0, overwrite_string.length + 1);
    }

    return answer;
}
