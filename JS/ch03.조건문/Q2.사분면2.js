// 사분면 고르기 - 백준도장 14681
let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);

x *= Math.random() > 0.5 ? 1 : -1;
y *= Math.random() > 0.5 ? 1 : -1;
/* 
console.log(x, y);

Quadrant = "";
 */


if (x > 0 && y > 0) Quadrant = "Quadrant 1";
else if (x > 0 && y < 0) Quadrant = "Quadrant 4";
else if (x < 0 && y > 0) Quadrant = "Quadrant 2";
else if (x < 0 && y < 0) Quadrant = "Quadrant 3";
else Quadrant = "좌표축";

console.log(x, y, Quadrant);
 