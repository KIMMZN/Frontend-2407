// Enhanced for 반복문;

let summerFruits = ["수박", "참외", "복숭아", "포도"];
// 출력;

for (let fruits of summerFruits)
    console.log(fruits);
  //


  // 하나의 문자열로 만들기;
  let favoriteFruits = "";
  for (let fruits of summerFruits)
    favoriteFruits += fruits + ' ';
console.log(favoriteFruits);

// 1에서 10까지 곱한값 (fatorial)
let factorial = 1;
for (let i = 1; i <= 10; i++)
  factorial *= i;
console.log(factorial);

// 1에서 30까지 3의 배수의 배열을 만들어라 ; [3, 6, 9 ... 30]
let multiple3 = [];
for (let i = 3; i <= 30; i += 3)
  multiple3.push(i);
console.log(multiple3); 


