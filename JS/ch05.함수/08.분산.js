//

/* 
function sumOfSquare(arr) { 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) 
        {
        sum += numbers[i] ** 2; // a
    }
    return sum;
 }
 
 const numbers = [1, 2, 3, 4, 5, 7];
 console.log(sumOfSquare(numbers)); //  */
//

function sumOfSquare(arr) {
    let sum = 0;
    for (let num of arr)
        sum += num *num;
    return sum;
}



 // 배열 원소의 합의 제곱
function squareOfSum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += num;
    return sum * sum;

}

let arr = [1, 2, 3, 4, 5];
console.log(sumOfSquare(arr), squareOfSum(arr));

//분산
let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
console.log(variance);