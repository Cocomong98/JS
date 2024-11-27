// 일급 객체? -> 함수를 변수와 같이 다루는 언어에 있는 개념 (JS가 이에 해당)
// JS의 함수도 일급 객체임 (함수가 기본적으로 객체임)

// ⭐️ 함수의 자료형
function addNumbers(a, b) {
    return a + b;
}
console.log(typeof addNumbers);

// 일급 객체의 특성

// 1. 상수, 변수에 할당될 수 있음

// 1-1
function isOddNum(number) {
    console.log((number % 2 ? "홀" : "짝") + "수입니다.");
    return number % 2 ? true : false;
}

// 함수의 리턴값이 상수 checkIfOdd에 할당됨
const checkIfOdd = isOddNum;

// 그래서 함수로 선언했던 isOddNum(23)과 할당된 checkIfOdd(23)이 같은 기능을 함
console.log(checkIfOdd(23));

// 1-2
let x = 7,
    y = 3;

// 덧셈, 뺄셈 함수 정의
let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

// 빼기 기능의 func2를 func1에 덮어씌움 -> func1의 본래 기능 상실
func1 = func2;
console.log(func1(x, y), func2(x, y));

// 1-3 : 객체/배열의 값으로도 할당 가능
let person = {
    name: "홍길동",
    age: 30,
    married: true,
    // introduce라는 함수가 객체의 value로 들어가 있음
    introduce: function (formal) {
        return formal ? "안녕하십니까. 홍길동 대리라고 합니다." : "안녕하세요, 홍길동이라고 해요.";
    },
};

console.log(person.introduce(true));
console.log(person.introduce(false));

// 2. 다른 함수에 파라미터로 전달될 수 있음

// 3. 다른 함수의 결과값으로 반환될 수 있음
