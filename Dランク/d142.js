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
  // 配列が['6 3 10']と一区切りしかなかったためlines[0]で.splitする必要があった
  let array = lines[0].split(" ").map(Number);

  let totalTrees = array[0];
  let bulbsPerTree = array[1];
  let interval = array[2];

  // 必要な電球の総数を計算
  let totalBulbs = Math.ceil(totalTrees / bulbsPerTree) * interval;

  // 結果を出力
  console.log(totalBulbs);
});
