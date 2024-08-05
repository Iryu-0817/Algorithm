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
  // とりあえず1文字ずつ配列化する
  const dayArray = lines[0].split("");

  // 出力結果をデフォルト値Yesで定義
  let answer = "Yes";

  // 配列の数分ループ回す（[11 1] なら ["1", "1", " ", "1"] で4回転)
  for (var i = 0; i < dayArray.length; i++) {
    // 配列の1つ目とそれ以降の値を比較する
    if (dayArray[i] !== " " && dayArray[0] !== dayArray[i]) {
      // 1つでも違う値が入ってたら出力結果をNoに代入し、ループを停止
      // ただし" "の場合はスルー
      answer = "No";
      break;
    }
  }

  //出力
  console.log(answer);
});

// このコードは、与えられた日付がゾロ目の日であるかどうかを判定し、その結果を出力するプログラムです。以下にコードの解説を行います。

// const dayArray = lines[0].split("");: 最初の行（日付）を1文字ずつの文字列に分割し、dayArray 配列に格納しています。例えば、"11 1" が与えられると、dayArray は ["1", "1", " ", "1"] となります。

// let answer = 'Yes';: 出力結果を格納する変数 answer を初期値 'Yes' で定義しています。

// for (var i = 0; i < dayArray.length; i++) { ... }: dayArray 配列の各要素に対してループを行います。

// if(dayArray[i] !== ' ' && dayArray[0] !== dayArray[i]){ ... }: 各要素が空白でなく、かつ最初の文字と異なる場合に、answer を 'No' に変更し、ループを抜け出します。この条件は、日付の各桁が同じでない場合を検出しています。ただし、空白文字の場合はスルーされます。

// console.log(answer);: 最終的な結果をコンソールに出力します。

// このプログラムは、与えられた日付がゾロ目の日であるかどうかを判定し、その結果を 'Yes' または 'No' として出力します。最初の文字と異なる文字が存在すれば 'No' になります。
