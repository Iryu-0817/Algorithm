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
  var data_array = lines[0].split(" ");
  var sum_people = Number(data_array[0]);
  var present_a = Number(data_array[1]);
  var present_b = Number(data_array[2]);

  for (var i = 1; i < sum_pepole + 1; i++) {
    if (i % present_a === 0) {
      if (i % present_b === 0) {
        console.log("AB");
      } else {
        console.log("A");
      }
    } else if (i % present_b === 0) {
      console.log("B");
    } else {
      console.log("N");
    }
  }
});
