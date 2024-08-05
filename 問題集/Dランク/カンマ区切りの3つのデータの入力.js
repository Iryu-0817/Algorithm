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
    // let array = lines[0];
    
    let element = lines[0].split(',');
    
    for(let i = 0;  i < element.length; i++) {
        console.log(element[i]);
    }
});