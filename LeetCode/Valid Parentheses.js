// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let char of s) {
    if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

//これはスタックというデータ構造を使ったアルゴリズムである。スタックは、「後入れ先出し」（LIFO: Last In, First Out）の性質を持つデータ構造です。

//・ 開きカッコが現れたらスタックに入れる。
// ・閉じカッコが現れたら、スタックの一番上にあるカッコと対応しているかを確認する。
// ・対応していれば、スタックからそのカッコを取り除く。対応していなければ、無効と判断する。

// つまりスタックの中の有無でtrueまたはfalseを返す。

トップの答え;

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let closeToOpen = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let splitedString = s.split("");
  let stackArray = [];

  //このコードを書くことによって、奇数のものをあらかじめ排除できる。そうすることで、処理が早くなる。
  if (splitedString.length % 2 == 0) {
    for (let i = 0; i < splitedString.length; i++) {
      if (!closeToOpen[splitedString[i]]) {
        stackArray.push(splitedString[i]);
      } else if (closeToOpen[splitedString[i]]) {
        if (
          stackArray[stackArray.length - 1] == closeToOpen[splitedString[i]]
        ) {
          stackArray.pop();
        } else {
          return false;
        }
      }
    }
    return stackArray.length == 0;
  } else {
    return false;
  }
};
