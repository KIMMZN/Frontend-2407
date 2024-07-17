// 1 ~ 10 홀수의 합
let sumOdd = 0;
for (let i = 1; i <= 10; i += 2) sumOdd += i;

sumOdd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) continue;
  sumOdd += i;
}
console.log(sumOdd);

for (let i = 1; i <= 5; i++) {
  let Line = "";
  for (let k = 1; k <= 5; k++) {
    //
    //if (k == i) continue;
    Line += k + " ";
    if (k == i) break;
  }
  console.log(Line);
}

// dd
