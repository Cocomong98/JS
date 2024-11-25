/*
js에는 정수, 실수 등의 자료형은 존재하지 않음
*/

// 자료형 없이 그냥 담을 수 있음
let x = 1;
let y = -1;

// 무한대에는 양의 무한대, 음의 무한대가 있음
x = 1 / 0;
console.log(x, typeof x);
y = -1 / 0;
console.log(y, typeof y);

// 무한대 자체로 넣을 수도 있음(문자열처럼 넣으면 안됨)
let z = Infinity;
console.log(y, typeof y);

// 숫자가 아닌 것 -> NaN
let a = 1 / "abc";
console.log(a);

// NaN인지 확인하는 방법은? '==' '===' 와 같은 대조는 불가능, 반드시 함수를 써야 함
console.log(
    a == NaN,
    a === NaN,
    // 숫자가 아닐 시 true 반환
    isNaN(a),
    // isNaN보다는 조금 더 엄격함
    Number.isNaN(a)
);

// isNaN과 Number.isNaN의 차이
console.log(typeof "1", isNaN("1"), Number.isNaN("1")); // 특정 숫자로 변환 가능한 문자
// isNaN은 ()로 받은 값이 숫자가 아니면 true을 반환
// Number.isNaN은 ()로 받은 값이 숫자 자료형인데 숫자가 아니면 true반환

console.log(typeof true, isNaN(true), Number.isNaN(true)); // true는 1, false는 0으로 변환됨
// 이 경우의 true false는 각각 1과0으로 치환되는 값이라 엄격하게 돌려도 NaN이 아님

console.log(typeof "a", isNaN("a"), Number.isNaN("a")); // ⚠️ 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(typeof (1 / "a"), isNaN(1 / "a"), Number.isNaN(1 / "a")); // NaN값인 경우
