//중첩(nested) for 반복문;

// 1. 별 다섯개를 여섯줄로 그리기;

for (i = 0; i < 6; i++) {
  let line = "";
  for (k = 0; k < 5; k++) {

    line += " *";
  }
    
 console.log(line);

}

//2. 디지털 시계를 10분마다 표시하기;
for (let hour = 0; hour <= 23; hour++ ){
  for (let minute = 0; minute <= 59; minute++) {
    if (minute % 10 == 0) console.log(`${hour}:${minute}`);
  }
}


// 3. 별을 대각선 모양으로 그리기(다이아몬드 1사분면);
for (let i = 0; i < 5; i++) {
  let line = "";
  for (let k = 0; k < i + 1; k++) 
    line += "* ";
  console.log(line);
}
// i가 한번 돌아갈때 k는 i + 1번 돌아간다 (*을 추가한다)
// i = 0 일때 , k = i + 1;번 돌아감 그래서 *
// i = 1, k= 0 한번 k = 1 한번 ; 그래서 **

// 4. 별을 대각선 모양으로 그리기(다이아몬드 4사분면);
for (let i = 5; i > 0; i--) {
  let line = "";
  for (let k = 0; k < i; k++)
    line += "* ";
  console.log(line);
}

