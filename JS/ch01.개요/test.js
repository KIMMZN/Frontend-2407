// \n: 줄바꿈 , \t: 탭 , \\: 역슬래시(\) 자체를 의미

console.log("안녕하세요"[4]);

console.log("자바스크립트".length);

//=== 양쪽이 같다
//!== 양쪽이 다르다

console.log(typeof "문자열");

console.log(`표현식 273 + 52의 값은 ${`273 + 52`}입니다....!`);
console.log('\tabc\tdef"ghi\njkl\\');

console.log("# 연습문제");
console.log("\\\\\\\\");
console.log("안녕하세요"[3]);

console.log("안뇨옹".length);

const PI = 3.141592;
console.log(PI);

const r = 10;

console.log(2 * PI * r); //반지름으로 원의 둘레 구하기
console.log(PI * r * r); //반지름으로 원의 넓이 구하기  ㅡㅡ> 두 상수를 활용해 원의 둘레와 넓이를 구하기

//복합 대입 연산자 (+= 많이씀)
let a = 0,
  str = "";
a += 1;
a += 2; // a <- a+ 1 ;
a += 3;
console.log(a);
str += "A quick brown fox"; // str <- str 'A quick brown box'
str += " jumps over the lazy dog";
console.log(str);

bbq = "arigato";
bbq += " goja";
bbq += " imaseu";
console.log(bbq);

//

// 증감 연산자
let x = 0,
  y = 0;
console.log(x++, ++y); // 후위 post-increment(조회후 1증가), 전위 pre-increment(조회전 1증가)
console.log(x, y);
console.log(x--, --y); // post-decrement, pre-decrement
console.log(x, y);

//ex
let number = 10;
console.log(++number);
console.log(number);

//자료형 변환
console.log(Number("123"), parseInt("123"), typeof Number("123"));
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof Boolean(1));
console.log(
  Boolean(0),
  Boolean(0.0),
  Boolean(""),

  Boolean(undefined) // false, 이경우 제외하고는 다 true
);
