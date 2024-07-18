
// 소수(prime number) 판별 / 1과 자기자신을 약수로 가지는 수를 소수

let num = 13;
//for (let i = 2; i < num; i++) {
//    if (num % i == 0) {
 //     console.log(`${num} 은/는 소수가 아닙니다.`);
 //     break;
 //   }
 // }

  function isPrimeNumber(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i < sqrtNum; i++) {
        if (num % i == 0)
            return false;

        // for (let i =2; i < num; i++) {       //위에건 좀 어렵고 이걸로 하는게 나을수 있다 어제 배운거임//
        //   if (num % i == 0)
        //        return false;
        //}
    }
    return true;
  }

  console.log(12, isPrimeNumber(12)); //12 매개변수;파라매터
  console.log(13, isPrimeNumber(13));


  //  2에서 부터 100 까지의 소수
  let primeNumbers = [];
  for (let i = 2; i <= 100; i++) {
    if (isPrimeNumber(i))
        primeNumbers.push(i)

  }
  console.log(primeNumbers);


