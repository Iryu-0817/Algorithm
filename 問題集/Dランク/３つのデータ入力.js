process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
// lines[0]に与えられているのは文字列だから、それを分割して配列にする。
// そうすることで、[lines[0],lines[1],lines[2]]となるからそれを順番に出力すれば良い
  let array = lines[0].split(' ');
  
// ※上でarrayが定義されている
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  
});