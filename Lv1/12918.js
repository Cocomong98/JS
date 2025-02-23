function solution(s) {
    // 길이가 4 또는 6이 아니라면 false 반환
    if (!(s.length === 4 || s.length === 6)) {
        return false;
    }

    // 모든 문자가 숫자인지 확인
    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i]))) {
            return false;
        }
    }

    return true;
}
