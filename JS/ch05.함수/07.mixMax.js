// Min - Max 찾기;
let arr = [45, 3, 27, 89, 6, 24, 98, 0, -5];

let minVal = 100, maxVal = 0; //최소값 ㅡ 큰값으로 처음 설정 , 최대값 ㅡ 작은값 처음 설정
for (let num of arr) {
    if (num < minVal) {
        minVal = num;
    }
    if (num > maxVal) {
        maxVal = num;
    }
    console.log(`과정: ${num}, 최소값: ${minVal}, 최대값: ${maxVal}`);
}

console.log(`최소값: ${minVal}, 최대값: ${maxVal}`);

function myMin(arr) {
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let num of arr) 
        if (num < minVal) 
            minVal = num;
            return minVal
         
}
console.log(myMin(arr));

function myMax(arr) {
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (let num of arr)
        maxVal = num;
    return maxVal;
}
// console.log(myMin(arr), myMax(arr));
console.log(myMin(45, 6, 3, 25, 88, 19), myMax(45, 6, 3, 25, 88, 19));