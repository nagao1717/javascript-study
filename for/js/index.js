$box = document.getElementById('box');
let = count = 0;


let profile = {
    name:'nagao',
    sex:'man',
    age:25,
}

//連想配列での繰り返し
// for( var key in profile ){
//     console.log(key+': '+profile.key);
// }

//arrayライクなオブジェクトの繰り返し
let no = [10,20,30,40,50,60,70,80,90,100];

for(let value of no) {
    console.log(value);
}