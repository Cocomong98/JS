// 함수란? -> 사전에 정의된 동작을 정의해서 실행
function 함수명(입력값) {
    // 수행할 일
    return 반환값; // 있을 시
}

함수명(입력값);

// 함수의 효율성
// 함수 사용 전
let a = 3,
    b = 4;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);

let c = 10,
    d = 2;

console.log(`${c} + ${d} = ${c + d}`);
console.log(`${c} - ${d} = ${c - d}`);
console.log(`${c} * ${d} = ${c * d}`);
console.log(`${c} / ${d} = ${c / d}`);

let e = 7,
    f = 5;

console.log(`${e} + ${f} = ${e + f}`);
console.log(`${e} - ${f} = ${e - f}`);
console.log(`${e} * ${f} = ${e * f}`);
console.log(`${e} / ${f} = ${e / f}`);

function allArithemics(x, y) {
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} - ${y} = ${x - y}`);
    console.log(`${x} * ${y} = ${x * y}`);
    console.log(`${x} / ${y} = ${x / y}`);
}

let a = 3,
    b = 4;
allArithemics(a, b);

let c = 10,
    d = 2;
allArithemics(c, d);

let e = 7,
    f = 5;
allArithemics(e, f);

// 함수의 가장 큰 의의는, 반복된 작업을 따로 정의해 코드를 효율적으로 만드는 데 있음

// 함수 활용의 한 예시
function isOdd(x) {
    // 짝수일 경우 false 반환
    // 0과 1이 반환되는데, 이대로 사용해도 가능은 하나 오류를 방지하기 위해 ! 2개로 bool 값으로 변환하는 것
    // 0이 !를 거쳐 true로 반환되고 !를 한번 더 거쳐 false가 됨
    return !!(x % 2);
}

let num = 12;

// 백틱과 삼항연산자를 사용해 홀/짝을 출력함
console.log(`${num}(는)은 ${isOdd(num) ? "홀" : "짝"}수입니다.`);

// 함수는 선언 - 정의 의 순서가 가능하다
// 함수는 실행문보다 나중에 정의하는 것이 가능
// 변수나 상수는 불가능! (var 제외)

// 함수 사용부터 하고
console.log(add(2, 7));

// 아랫 단에서 정의
// x,y를 입력받아 합을 출력하는 함수
function add(x, y) {
    return x + y;
}

// ==================================================================================================

// 함수 정의법

// 1. 함수 선언 (정석)
function add(x, y) {
    return x + y;
}

console.log(add(2, 7));

// 2. 상수, 변수에 함수 대입 -> 함수 수정에서와 동일한 원리. 함수도 변수 취급이므로 이렇게 수정이 됨
const subt = function (x, y) {
    return x - y;
};

console.log(subt(7, 2));

// 이렇게 설정할 수 있는 이유 -> JS에서는 함수도 변수로 취급받기 떄문에, add 라는 이름만 가지고도 함수 수정이 가능한 것!
add = function (x, y) {
    // return x+y 사이에 출력부분을 더함
    console.log(`${x}와 ${y}를 더합니다.`);
    console.log(`결과는 ${x + y}입니다.`);
    return x + y;
};

console.log(add(2, 7));

// 3. 화살표 함수 (arrow function)
// 값만 return하는 함수일 경우
const mult = (x, y) => x * y;

console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
// {}안에 추가적인 내용 기재 (일반적인 사용법과 동일)
const mult = (x, y) => {
    console.log(`${x}와 ${y}를 곱합니다.`);
    console.log(`결과는 ${x * y}입니다.`);
    return x * y;
};

console.log(mult(2, 7));

// 파라미터가 하나인 경우, ()를 사용하지 않기도 함
const pow = (x) => x ** 2;
console.log(pow(3));

// 주의점 1번의 방식과 2,3번의 방식은 호이스팅되지 않음
// 호이스팅 = 함수 선 사용, 후 정의
// 기존의 방식은 엔진이 코드를 실행하기 전에 정의되는 것이라 가능한 것
