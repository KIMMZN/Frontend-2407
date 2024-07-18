// * 1에서 100사이의 정수값 더하기
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; //sum = sum + i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum}`);

// run - 1에서 100사이의 정수의 합 = 5050

// 1에서 100사이의 홀수의 합
let sumOdd = 0;
for (
  let i = 1;
  i < 100;
  i += 2 // i = i + 2
) {
  sumOdd += i; // sumodd = sumodd + i
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

//1에서 100 사이의 짝수의 합
let sumEven = 0;
for (
  let i = 2;
  i <= 100;
  i += 2 // i += 2 == i = i + 2
) {
  sumEven += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven}`);

//1에서 100사이의 3의 배수의 합
let sumTriple = 0;
for (let i = 3; i < 100; i += 3) sumTriple += i;

console.log(`1에서 100사이의 3의 배수의 합 = ${sumTriple}`);

// 200에서 100사이의 5의 배수의 합
let sum5 = 0;
for (let i = 200; i >= 100; i -= 5) {
  sum5 += i;
}
console.log(sum5);

//하루는 몇분
let sumMinute = 0;
for (let hour = 0; hour <= 23; hour++) {
  for (let minute = 0; minute <= 59; minute++) {
    sumMinute++;
  }
}

console.log(sumMinute);

// for (let i=0, k=0; i * k > 100; i++. k++)
