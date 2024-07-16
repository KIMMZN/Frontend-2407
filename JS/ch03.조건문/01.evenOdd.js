/*
 * 조건문
 */

// Math.random() - 0.0 ~ 0.9999의 임의의 값을 생성해 줌;
// math.ceil() - 소숫점 이하를 올려서 정수값으로 만들어 줌;
let num = Math.ceil(Math.random() * 6); // 1 ~ 6 정수값;
console.log(num);

// 홀수 / 짝수
if (num % 2 == 0) {
  console.log(`${num} 은/는 짝수입니다.`);
}

if (num % 2 == 1) {
  console.log(`${num} 은/는 홀수입니다.`);
}

// if / else
num = Math.ceil(Math.random() * 6);
if (num % 2 == 0) {
  console.log(`${num} 은/는 짝수입니다.`);
} else {
  console.log(`${num} 은/는 홀수입니다.`);
}

// if (조건식) { code block 여러줄}
// if (조건식) statement - 조건문 안에 실행문이 한개만 있는경우에는 {} 생략 가능
num = Math.ceil(Math.random() * 6);
if (num % 2 == 0) console.log(`${num} 은/는 짝수입니다.`);
else console.log(`${num} 은/는 홀수입니다.`);

// 123 작은수 456 큰수
num = Math.ceil(Math.random() * 6);
if (num <= 3) console.log(`${num} 은 작은수 입니다.`);
else console.log(`${num} 은 큰수 입니다.`);

num = Math.ceil(Math.random() * 6);
if (num >= 4) console.log(`${num} 은/는 큰수 입니다.`);
else console.log(`${num} 은/는 작은 수 입니다.`);
