Math.round(); // 주어진 숫자를 반올림합니다. 소수점 첫째 자리에서 반올림하여 가장 가까운 정수로 만듭니다. */
Math.ceil(); //주어진 숫자보다 크거나 같은 가장 작은 정수로 올림합니다. 무조건 반올림
Math.floor(); //주어진 숫자보다 작거나 같은 가장 큰 정수로 내림합니다.
Math.trunc(); //주어진 숫자의 소수점 이하를 버리고 정수 부분만 반환합니다.
Math.random(); //0 이상 1 미만의 난수를 생성합니다. 이 값은 부동 소수점 수입니다. */

let numm = Math.ceil(Math.random() * 6); // 1 ~ 6 정수값;
console.log(numm);

/* Math.round() // 주어진 숫자를 반올림합니다. 소수점 첫째 자리에서 반올림하여 가장 가까운 정수로 만듭니다. */
//일반적인 반올림
let num = Math.round(4.5);
let num1 = Math.round(4.3);

console.log(num, num1);

// Math.ceil()	주어진 숫자보다 크거나 같은 가장 작은 정수로 올림합니다. 무조건 반올림
let num2 = Math.ceil(3.1); // 결과: 5
let num3 = Math.ceil(3.9); // 결과: 5
console.log(num2, num3);

// Math.floor(); 주어진 숫자보다 작거나 같은 가장 큰 정수로 내림합니다.
let num4 = Math.floor(6.9);
let num5 = Math.floor(6.1);
console.log(num4, num5);

//Math.trunc(); 주어진 숫자의 소수점 이하를 버리고 정수 부분만 반환합니다.
let num6 = Math.trunc(6.8);
let num7 = Math.trunc(6.1);
console.log(num6, num7);

//Math.random(); 0 이상 1 미만의 난수를 생성합니다. 이 값은 부동 소수점 수입니다.
let num8 = Math.random();
console.log(num8);

//parseInt() 함수는 JavaScript에서 문자열을 정수로 변환하는 함수입니다.
