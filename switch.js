// 한 변수에 대해서 여러가지 선택사항이 있을 경우에 사용
const fingersOut = 2;

switch (fingersOut) {
    // 순서 상관없음
    case 2:
        console.log("가위");
        break;
    case 0:
        console.log("바위");
        break;
    case 5:
        console.log("보");
        break;
    default:
        console.log("무효");
}
// 여기서 break가 없다면 시작지점 이후로 계속 반복
// default는 break가 되지 않은 경우 실행 -> else 정도로 보면 됨

const direction = "north";
let directionKor;

switch (direction) {
    case "north":
        directionKor = "북";
        break;
    case "south":
        directionKor = "남";
        break;
    case "east":
        directionKor = "동";
        break;
    case "west":
        directionKor = "서";
        break;
    default:
        directionKor = "무효";
}

console.log(directionKor);
