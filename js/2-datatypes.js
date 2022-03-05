//Primitive data types
//memory is allocated in stack
//string

var name = "yohana";
console.log("my string is " + name);
console.log("data type is " + (typeof name));

//numbers
let marks = 34;
console.log("data type is " + (typeof marks));

//Null
let nullVar = null;
console.log("data type is " + (typeof nullVar));

//Undefined 
let undef = undefined;
console.log("data type is " + (typeof undef));


//Reference datatypes
//Memory is allocated in heap

//arrays
let arr=[1,2,3,4,"string"];
console.log("datatype is "+ (typeof arr));

//object literals

let marks1={
    yohana:23,
    nikhil:56,
    swagath:78,
}
console.log(marks1);
console.log("datatype is "+(typeof marks1));


//functions
function findname()
{

}
console.log(typeof findname);

//data

let date=new Date();
console.log(typeof date);