// 💡 변수이므로 let이 사용됨
// c에서 배울때와의 차이점은 let을 사용한다는 점
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5; ) {
    console.log(i++); // ++i로 바꿔볼 것
}

// 둘 이상의 변수도 사용이 가능하다 (,로 선언부를 구분하면 됨)
for (let x = 0, y = 10; x <= y; x++, y--) {
    console.log(x, y);
}

// 변수로 bool도 가능하다. 아래처럼 사용함
// x의 T/F가 바뀌면서 y와 z를 증가시키므로, y증가 -> z증가 의 순서가 반복된다 (삼항연산자)
for (let x = true, y = 0, z = 0; y * z < 10; x = !x, x ? y++ : z++) {
    console.log(y, z);
}

// 아래는 무한루프. for 반복문에서 조건이 없으면 무한히 반복된다
let x = 0;

for (;;) {
    console.log(x);
}

console.log("출력 안됨");

// 반대로 영원히 종료조건을 달성하지 못해도 무한루프
for (let i = 0; i < 10; i++) {
    console.log(i--);
}

console.log("출력 안됨");

// ==============================================================================

// 객체는 반복문으로 내부 조건들을 하나씩 출력 가능
// 캡스톤때 미리 알았다면 더 편했을 것

// for (const 키 이름 in 객체) -> 객체 내부의 키 순서대로 반환함
const lunch = {
    name: "라면",
    taste: "매운맛",
    kilocalories: 500,
    cold: false,
};

for (const key in lunch) {
    // 💡 변할 것이 아니므로 const 사용
    console.log(key, ":", lunch[key]);
}

// 배열은 반복문으로 배열 항목을 순서대로 출력 가능

// for (const 항목 for 배열) -> 배열 내부의 값 순서대로 반환
const list = [1, "가나다", false, null];

for (const item of list) {
    console.log(item);
}

// for (const ~ of ~)는 이터러블에 적용되므로, 문자열에도 적용이 가능하다!
for (const letter of "안녕하세요~") {
    console.log(letter);
}

// for - of의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
    // 이곳에 i를 변경하는 코드가 들어간다 -> 원래 의도했던 것과 다르게 실행될 수 있음
    console.log(numbers[i]);
}

// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
    console.log(num);
}

// let를 사용해도 오류가 날 수 있다
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
    num++; // ⚠️ 복사된 값. let 사용 주목
    numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

// 실제 값이 바뀔수도 있음
for (let i = 0; i < numbers1.length; i++) {
    numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경 (1씩 추가)
}
console.log(numbers1, numbers2);

// ==============================================================================

// continue와 break는 한 개의 루프를 건너뛴다
// 아래 코드는 3의 배수인 경우에는 console.log를 건너뜀
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

console.log("for 루프 종료");

// 아래 루프는 5일 경우 아예 반복을 종료
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

console.log("for 루프 종료");
