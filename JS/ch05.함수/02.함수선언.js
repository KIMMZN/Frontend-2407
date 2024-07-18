/*
* 함수선언
*/

// 1. 선언적 함수;
function add(a, b) {            // a, b - 매개변수, parameter, argument
    return a +b;                // 반환값;
}

let result = add(3,4);
console.log(result);
//
console.log(add(4, 5));
console.log(`2 + 5 = ${add(2, 5)}`);

//2. 익명(Anonymous) 함수
const anonyadd = function(a, b) {
    return a + b;
    
}
console.log(`3 + 4 = ${anonyadd(3,4)}`);
console.log(typeof anonyadd);

// 3. 화살표 함수, 람다(lambda) 함수;
const arrowAdd = (a, b) => a + b; //function과 return 생략 (react 같은데서 자주쓰임);
console.log(`3 + 4 = ${arrowAdd(3,4)}`);
console.log(typeof arrowAdd);