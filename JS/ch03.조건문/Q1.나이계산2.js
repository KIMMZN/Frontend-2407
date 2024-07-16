const bYear = 1992,
  bMonth = 6,
  bDay = 2; // 생년월일
const today = new Date(); // 현재 날짜
let tYear = today.getFullYear(); // 현재 연도
let tMonth = today.getMonth() + 1; // 현재 월 (0부터 시작하므로 1 더함)
let tDay = today.getDate(); // 현재 일

let age; // 나이 변수

if (tMonth < bMonth) { age = tYear - bYear - 1; }
// 현재월이 생월보다 작은 경우

// 현재월이 생월보다 큰경우
else if (tMonth > bMonth) {
    age = tyear - byear -1;
}
else {
    if (tDay>=bDay) age = tYear - bYear;
    else
    
}













console.log(`${bYear}-${bMonth}-${bDay}, 나이: ${age}`); // 결과 출력