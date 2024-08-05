// 数値を 3 けたごとにカンマ区切りで出力
// 入力例1
// 123456789

// 出力例1
// 123,456,789


process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
reader.on('close', () => {
    let number = lines[0];
  let result = '';

  // 数字を3桁ごとに区切り、カンマを挿入する
  for (let i = 0; i < number.length; i += 3) {
    result += number.slice(i, i + 3);
    if (i < number.length - 3) {
      result += ',';
    }
  }

  console.log(result);
});




// 入力例3
// 12345678901234567890

// 出力例3
// 12,345,678,901,234,567,890


let number = lines[0];
let result = '';

// 数字を3桁ごとに区切り、最初の区切りから最後の3桁までの区切りごとにカンマを挿入する
for (let i = 0; i < number.length; i++) {
  if (i > 0 && i % 3 == number.length % 3) {
    result += ',';
  }
  result += number[i];
}

console.log(result);