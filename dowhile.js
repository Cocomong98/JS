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
    if (x++ >= 5) break;
    console.log(x);
}
