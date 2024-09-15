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
  let [N, M] = lines[0].split(" ").map(Number);
  let distance = lines.slice(1).map(Number);

  let totalLongest = 0;

  for (let i = 0; i < distance.length; i++) {
    if (distance[i] <= M) {
      totalLongest += distance[i];
    }
  }

  console.log(totalLongest);
});
