//問題文： Given an integer x, return true if x is a palindrome, and false otherwise.


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// 自分のコード
const isPalindrome = (x) => {
    if (x < 0) return false; // 負の数は回文数ではない
    
    let original = x;        // 元の数値を保存
    let reversed = 0;        // 反転した数値を保存する変数
    
    while (x > 0) {
        reversed = reversed * 10 + (x % 10); // 末尾の数字を反転結果に追加
        x = Math.floor(x / 10);             // 数値を10で割って末尾を削除
    }
    
    return original === reversed; // 元の数値と反転結果を比較
};




//　上位のコード１
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function(x) {
    if (x < 0 || x % 10 == 0 && x !== 0) {
        return false
    }
let reversed = 0;
    let original = x;

    while (x > 0) {
        // Extract the last digit of x
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        // Remove the last digit from x
        x = Math.floor(x / 10);
    }

    // Check if the reversed number equals the original
    return reversed === original;
};




// 上位のコード２
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
    if (x < 0) return false
    if (x === 0) return true
    let reverse = null
    let cache = x
    while (cache > 0) {
        const lastNumber = cache % 10
        reverse = reverse * 10 + lastNumber
        cache = Math.floor(cache / 10)
    }

    return x === reverse
};
