{
  /*　 
あなたは友達とボールのパス回しをしています。
どうやら、このパス回しはルールが特徴的なようです。

最初に各人はそれぞれボールをいくつか所持しています。
その後、適当な順番でボールをパスしていくのですが、この際にパスする相手とボールの個数を宣言します。
宣言した個数以上のボールを持っている場合は宣言した個数のボールを、そうでない場合は持っているボールすべてを、選んだ相手にパスします。
なお、ボールを所持できる数に上限はありません。

このパス回しの情報が順番に与えられるので、最終的に各人が持っているボールの個数を求めてください。
下図は入力例 1 の様子を表しています。

*/
}
process.stdin.resume();
process.stdin.setEncoding("utf8");

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", (line) => {
  lines.push(line);
});

reader.on("close", () => {
  // プレイヤーの数を取得
  const numPlayers = parseInt(lines[0], 10);

  // 各プレイヤーの初期のボールの数を取得
  let balls = [];
  for (let i = 1; i <= numPlayers; i++) {
    balls.push(parseInt(lines[i], 10));
  }

  // パス情報の処理
  for (let i = numPlayers + 1; i < lines.length; i++) {
    const line = lines[i];

    const parts = line.split(" ");

    if (parts.length !== 3) {
      continue; // skip invalid lines
    }

    const [from, to, count] = parts.map(Number);

    // インデックスの調整
    const fromIndex = from - 1;
    const toIndex = to - 1;

    if (balls[fromIndex] >= count) {
      balls[fromIndex] -= count;
      balls[toIndex] += count;
    } else {
      balls[toIndex] += balls[fromIndex];
      balls[fromIndex] = 0;
    }
  }

  // 最終的なボールの数を出力
  for (let i = 0; i < balls.length; i++) {
    console.log(balls[i]);
  }
});

{
  /*入力例1
3
10
5
8
3

1 3 5
3 2 3
2 1 10

出力例1
13
0
10

入力例2
5
51
49
15
61
40
5

3 1 5
5 2 14
4 3 79
3 5 31
4 3 51

出力例2
56
63
40
0
57 */
}
