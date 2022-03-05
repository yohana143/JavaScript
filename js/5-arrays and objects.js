// Array and objects
let marks=[2,3,4,52,6,7];
const fruits=["oraghe","hgtvsc","hyb"];
const mixed=["str",34,[4,2,7,1]];

const arr=new Array(2,3,1,7,9,3);//arr is my object
console.log(arr);
console.log(fruits);
console.log(mixed);
console.log(fruits[2]);
console.log(fruits.length);
arr[0]="yohana";
console.log(arr);
console.log(Array.isArray('jhbs'));


let arrayelement=arr[0];
console.log('element:',arrayelement);
let value=marks.indexOf(3);
console.log(value);

// Mutating or Modifying
marks.push(76);
console.log(marks);
marks.unshift(1009);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(2,3);
console.log(marks);

let marks2=[3,5,1,7,9];
marks2.reverse();
console.log(marks2);
marks.concat(marks2);
console.log(marks);

//object

let myobj={
    name:"Yohana",
    // "name":"Yohana",
    marks:89,
    roll:67,
    marks1:[5,2,6,7,1],
}
console.log(myobj);
console.log(myobj.marks);
// console.log(myobj['name']);