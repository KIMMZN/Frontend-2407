// Array 객체

// 배열 생성
let fruit = ['apple', 'banana', 'cherry']; // 'apple'의 철자도 수정
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 배열 메소드
// concat
let newFruits = fruit.concat('mango', 'orange'); // 'fruit'로 일관성 유지
console.log(newFruits, fruit);

// join - 문자열로 연결
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);

// pop()* - 맨 뒤에 있는 요소를 끄집어 내고, 파괴적 메소드;
console.log(cars.pop());
console.log(cars);

// push()* ㅡ 맨 뒤에 요소를 추가;
cars.push('volvo'); cars.push('hyundai');
console.log(cars);

// reverse()* - 순서 뒤집기;
cars.reverse();
console.log(cars);

// sort()* - 정렬
let numbers = [34, 25, 89, 7, 45, 55, 19]
// numbers.sort((a, b) => a - b);
// 오름차순(Ascending order)                       
 numbers.sort(function(a, b) {
    return a - b;
}); 


console.log(numbers);