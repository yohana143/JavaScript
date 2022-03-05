//To String conversion

let myvar;
myvar=34;
myvar=String(34);
console.log(myvar,(typeof myvar));

let date=new Date();
// console.log(date,(typeof date));
date=String(date);
console.log(date,(typeof date));

let i=8;
// console.log(i.toString());
i=String(i);
console.log(typeof i);



//To Number converision

let str="Yohana";
str=Number(str);
console.log(str,(typeof str));//Yohana is not a number its is string which is reconizedd by compiler

let arr=[1,2,3,4,5];
// arr=String(arr);
// arr=Number(arr);//Not a number
console.log(arr,(typeof arr));










//Type coercion

// let mystr=Number("657");
let mystr="657";
let mynum=6;
console.log(mystr * mynum);