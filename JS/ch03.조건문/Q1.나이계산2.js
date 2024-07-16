const bYear = 1992,
  bMonth = 6,
  bDay = 2; // 생년월일
const today = new Date(); // 현재 날짜
let tYear = today.getFullYear(); // 현재 연도
let tMonth = today.getMonth() + 1; // 현재 월 (0부터 시작하므로 1 더함)
let tDay = today.getDate(); // 현재 일

let age; // 나이 변수
// 현재 월이 생월보다 작은 경우
// 현재 월이 생월보다 큰 경우
// 현재 월이 생월과 같은 경우
// 현재 일이 생일보다 작은 경우
// 현재 일이 생일과 같거나 큰 경우
if (tMonth < bMonth) age = tYear - bYear - 1;
else if (tMonth > bMonth) age = tYear - bYear;
else {
  if (tDay < bDay) age = tYear - bYear - 1;
  else tDay >= tDay;
  age = tYear = bYear;
}

console.log(`${bYear}-${bMonth}-${bDay}, 나이: ${age}`);

console.log(`${bYear}-${bMonth}-${bDay}, 나이: ${age}`); // 결과 출력
