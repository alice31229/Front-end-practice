// == 協助轉型（1 and '1' same）; === 嚴謹比較
// && -> and; || -> or
// console -> document : see DOM(document object model)

let a = 'Hello world';
let b = 'my first js';
let c = 'alert jumps out!';
let n = 10;
let nn = n.toString();
let nn_to_int = parseInt(nn);
let str_test = '  string test  ';
let fancy = `${a}, ${b}, the function is just like f-string in python.`;

// if statement example
if (a.length>3){
    console.log('try if statement');
}else if (a.length==1){
    console.log('no show');
}else{
    console.log('no show again');
} 

// double if statement example
// if (){
//     if (){

//     } else if (){

//     } else{

//     }
// }

// array 陣列
let arr = [1,2,3];
arr[arr.length] = arr.length+2; // 寫入資料
arr.push(6); // 寫入資料 放在最後一筆 類似append
arr.unshift(0); // 寫入資料 放在第一筆
console.log(arr);
let arr_del = arr; 
arr_del.pop(); // 刪除最後一筆資料
arr_del.shift(); // 刪除第一筆資料

// object 物件
let o = {
    name : 'Alice',
    year : 2021,
};

o.year = 2001;
o.now = 2021;
// 刪除：delete o.now;

console.log(o.name==o['name']); // object 取值

// 陣列物件資料
let o_in_a = [
    {
        p1:'Alice',
        h:164
    },
    {
        p2:'Cindy',
        h:161
    }
]
console.log(o_in_a[1].p2);

say_hi();

// 函式
function say_hi(){
    console.log('Hello world');
}

function add(n1,n2){
    let total = n1+n2;
    return total;
}

// DOM(document object model)
const el = document.querySelector('.test');
el.textContent = '修改文字節點 文字內容 test'; // 冒號內的內容都顯示

const el_a = document.querySelector('a');
el_a.setAttribute('href','https://www.youtube.com/');
el_a.setAttribute('class','blue');

const el2 = document.querySelector('.inner');
let link = 'https://www.google.com/search?q=javascript&oq=java&aqs=chrome.1.69i57j0i433j0i131i433l2j0i433j69i60l3.3363j0j1&sourceid=chrome&ie=UTF-8';
el2.innerHTML = `<a href=${link}>new html from js</a>`; // 冒號內可以用標籤功能顯現

// forEach 用法 只是用陣列 []
let d = [1,2,3,5,6,7,8,9,0];
let count = 0;
let n_arr = [];
d.forEach(function(item,i){
    if (item%2==0){
        count+=1;
        n_arr.push(item);
    }
})
console.log(count, n_arr);

console.log(str_test.length);
console.log(str_test.trim());
console.log(str_test);
console.log(fancy);
console.log(typeof nn_to_int);
console.log(n*a);
console.log(typeof a*n);
console.log(typeof NaN);
console.log(typeof nn);
alert(c);