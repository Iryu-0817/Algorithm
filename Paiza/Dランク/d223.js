process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  let output1 = parseInt(lines[0]);
  let output2 = parseInt(lines[1]);
  let output3 = parseInt(lines[2]);

  let outPut = output1 + output2 + output3;
  console.log(outPut);
});
