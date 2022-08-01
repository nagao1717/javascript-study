
//サンプルの高階関数
function Sanple(data,func){

    for(let value of data){     //配列の要素数繰り返す
        func(value);
    }
}

let sum = 0;
//配列の合計値を取得する関数
function ArraySum(value) {
    sum += value;
}

let data = [10,20,30];  //配列
Sanple(data,ArraySum);  //高階関数の呼び出し
console.log(sum);       //合計値sumをコンソールに表示




//受け取った引数をコンソールに表示する関数
function ConsoleLog(value) {
    console.log(value);
}

data=['もも','りんご','さくら'];  //配列

//高階関数の呼び出し
// Sanple(data,ConsoleLog);