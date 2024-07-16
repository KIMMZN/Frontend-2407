/*
 *       if()
 *       else if()
 *       ...
 *       else
 */
// score
let score = Math.ceil(Math.random() * 60) + 40; // 41 ~100 사이의 정수
let grade = "";

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘다로 나누어지면 FizzBuzz
// 위의 경우가 아니면 숫자를 출력;

let FizzBuzz = "";

if (score % 5 == 0 && score % 7 == 0) FizzBuzz = "Fizzbuzz";
// if (score % 35 == 0)
// console.log()
else if (score % 5 == 0) FizzBuzz = "Fizz";
else if (score % 7 == 0) FizzBuzz = "Buzz";
else FizzBuzz = "none";

console.log(`FizzBuzz: ${FizzBuzz}`);
