//階乗を求める関数
function f(n) {
    if(n!=0) {
        return n*f(n-1);
    }
    return 1;
}
console.log(f(5));

//総和を求める関数
// function f2(n) {
//     if(n!=0) {
//         return n+f2(n-1);
//     }
//     return 0;
// }
// console.log(f2(3));


//基本的な書き方
function recurive(n) {
    console.log('recurive: '+n);
    if(n!=0) {          //条件式
        recurive(n-1);  //自分自身を呼び出し
    }
    return;             //繰り返し終了時の処理
}
recurive(4);