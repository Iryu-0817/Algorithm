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

// 配列を数値に変換し、配列ごとNに代入
  const N = parseInt(lines[0]);

  
//　
  for( let i = 1; i <= N; i++){
// lines内の[i]を出力？？
      console.log(lines[i]);
  }
  
});