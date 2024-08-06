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
  var len = lines[0].length;
  var frame = ["+", "+"];
  for (var i = len - 1; i >= 0; i--) {
    frame.push("+");
  }
  var frame_fixed = frame.join("");

  console.log(frame_fixed);
  console.log("+" + lines[0] + "+");
  console.log(frame_fixed);
});
