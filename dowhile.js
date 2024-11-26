// while -> ()가 참이면 반복
let x = 0;

while (x < 10) {
    console.log(x++);
}

// for와 마찬가지로 조건이 충족되면 무한루프
while (true) {
    console.log("무한반복");
}

// break가 있으면 탈출
let x = 0;

// 1~5까지 출력
while (true) {
    // x를 1씩 증가시키면서 5 이하까지 출력하기
    if (x++ >= 5) break;
    console.log(x);
}

// 이러면 무한루프 -> 이유는?
let x = 0;

while (x < 14) {
    // 2의 배수인 경우 밑의 break와 console.log를 제치고 반복문의 최상단으로 감
    if (x % 2 === 0) continue;
    // 영원히 실행되지 않음
    if (x > 7) break;
    // x 증가와 출력
    console.log(x++);
}

// 이렇게 수정하면 됨
// 짧게 짠 수정 코드
let x = 0;

while (x < 14) {
    // x에 1을 더하고 2의 배수인 경우 아래 스킵
    if (x++ % 2 === 0) continue;
    // 짝수의 경우 스킵됨
    if (x > 8) break;
    //
    console.log(x - 1);
}

// 코드를 이해에 치중해서 작성해보기
// 가독성 위주로 짠 코드
// 코드에 의도가 드러나도록
let x = 0;

// 14보다 작을 경우에만 반복
while (x < 14) {
    // 2의 배수일 경우 toContinue true
    const toContinue = x % 2 === 0;
    // 7 초과일 경우 toBreak true
    const toBreak = x > 7;
    // nNow는 1씩 증가 (0에서부터)
    const xNow = x++;

    // 2의 배수일 경우, 나머지를 무시하고 반복
    if (toContinue) continue;
    // 7 이상이 경우 반복 종료
    if (toBreak) break;
    // 위 2가지 case이외는 현재의 xNow 출력 -> 1,3,5,7
    console.log(xNow);
}

// do-while => 일단 실행을 하고, 이후에 반복을 결정
// while이나 for의 경우에 break 조건 달성시 이후의 단계를 무시했었음
let x = 12;

do {
    // x를 출력하고 1 추가
    console.log(x++);
    // 종료조건이 x가 10 미만이로, 원래는 돌아가지 않아야 할 코드지만 최초 1회는 동작
} while (x < 10);
