/*   
10 個の数値が半角スペース区切りで与えられます。これらの数値をカンマ区切りで出力してください。
ただし、末尾にはカンマではなく改行を出力してください。

入力例1
0 1 2 3 4 5 6 7 8 9

出力例1
0,1,2,3,4,5,6,7,8,9



入力例2
462 218 867 547 11 630 845 689 891 630

出力例2
462,218,867,547,11,630,845,689,891,630

*/



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
  let array = lines[0].split(' ');
  

//for文の中にif文を入れることにより出力条件を２〜以上にできる
  for ( let i = 0; i < 10; i++){
      process.stdout.write(array[i]);
      if(i < 10 -1){
          process.stdout.write(",");
      }
  }
  
});







