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
    // HとWを切り分けて取得
    const [H,W] = lines[0].split(' ').map(Number);
    
    // グリッドとして格納することで、二次元配列になる。
    const grid = [];
    for (let i = 1; i <= H; i ++) {
        grid.push(lines[i]);
    }
    // 3行3列の二次元配列を作成
    // let grid = [
    //     ["#", "#", "#"],
    //     ["#", ".", "#"],
    //     ["#", "#", "#"]
    // ];

    // 行0: # # # # .
    // 行1: # . # # #
    // 行2: # # # . #
    // 行3: # . # # #
    // 行4: # # # . #

    
    
    let count = 0;
    
    // iが縦列, jが横列
    for(let i = 1; i < H - 1; i++) {
        for (let j = 1; j < W - 1; j++){
            if(grid[i][j] !== '.') continue;
            
            let isDonut = true;
            
            // di = -1:縦一列ズレる。
            // dj = -1:横一列ズレる
            for (let di = -1; di <= 1; di++) {
                for(let dj = -1; dj <= 1; dj++) {
                    if(di === 0 && dj === 0) continue;
                    if(grid[i + di][j + dj] !== '#'){
                        isDonut = false;
                        break;
                    }
                }
            }
            if(isDonut){
                count++;
            }   
        }
    }
    
    
  
  console.log(count);
});