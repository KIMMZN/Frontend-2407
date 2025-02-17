// for 반복문
let summerFruits = ["수박", "참외", "복숭아", "포도"];
/* 
for (let i = 0; i < 4; i++) {
  console.log(i, summerFruits[i]);
}

for (let i = 0; i <= 3; i++) {
  console.log(i, summerFruits[i]);
} */

// 아래것으로 하는게 제일 바람직;
for (let i = 0; i < summerFruits.length; i++) {
  console.log(i, summerFruits[i]);
}

// * 1에서 100사이의 정수값 더하기 ; 자주 사용됨 *
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
  sum100 += i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum100}`);

// 1에서 100사이의 홀수의 합 구하기
/* let sumOdd = 0;
for (let i = 1; 1 <= 100; i++) {
  if (i % 2 == 1) sumOdd += i;
}

console.log(`1에서 100사이의 홀수의 합 =${sumOdd}`); */

let sumOdd = 0;
for (let i = 1; i < 100; i += 2) {
  sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

// 1~ 100 사이의 짝수의 합 구하기
let sumeven = 0;
for (let i = 2; i <= 100; i += 2) {
  sumeven += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${sumeven}`);

// 1에서 100사이의 3의 배수의 합 구하기
let sum3 = 0;
for (let i = 3; i < 100; i += 3) {
  sum3 += i;
}
console.log(`1에서 100사이의 3의 배수의 합 = ${sum3}`);

// 200에서 100사이의 5의 배수의 합
let sum5 = 0;
for (let i = 200; i >= 100; i -= 5) {
  sum5 += i;
}

console.log(`200에서 100사이의 5의 배수의 합 = ${sum5}`);

// 하루는 몇분이냐?
let sumMinute = 0;
for (let hour = 0; hour <= 23; hour++) {
  for (let minute = 0; minute <= 59; minute++) {
    // sumMinute++;
    sumMinute++;
  }
}
console.log(sumMinute);
