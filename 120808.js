// 분수의 덧셈
/*
첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    // 분자
    let num = numer1 * denom2 + numer2 * denom1;
    // 분모
    let denom = denom1 * denom2;

    // 변환
    let a = num;
    let b = denom;

    // 최소공약수 구하기

    // 만약 b로 a를 나누고 나머지가 0이면, (a>b) b가 최대공약수이고, 그렇지 않으면 나머지로 b를 나누는 유클리드 호제법으로 계산
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

    // 이를 answer 배열에 넣기
    answer[0] = a / gcd(a, b);
    answer[1] = b / gcd(a, b);

    // 이 과정에서 기약분수로 만들어야 함

    return answer;
}
