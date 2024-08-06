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
  let leetRules = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    Z: "2",
  };

  /* 
    .replaceは文字列を変換するためにあるものである
    */
  let leetConverter = (input) =>
    input.replace(/[AEGIOSZ]/gi, (char) => leetRules[char]);

  let inputString = lines[0];
  let leetString = leetConverter(inputString);

  console.log(leetString);
});
