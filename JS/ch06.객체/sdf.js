function largestPalindromeProduct() {
    let largest = 0;
    let factors = [0, 0];

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            let product = i * j;
            if (product > largest && isPalindrome(product)) {
                largest = product;
                factors = [i, j];
            }
        }
    }

    return { palindrome: largest, factors: factors };
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

console.log(largestPalindromeProduct());