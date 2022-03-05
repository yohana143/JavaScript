console.log("variables");
//variables in javascript
//var, let, const keywords used to create the variables
var name='Yohana';
var channel;
name="Erukala"//can be changed in var but not in constant 
// channel="codewithharry";
var marks=45;
console.log(marks,name,channel);

//Rules for creating 

/*
1.Cannot start with numbers
2.Can start with letters ,nu mbers, _ or $
var _city="Delhi"
var $city="delhi"
both _ and $ are used in OOPS In js
3. Are case sensitive 
*/

const name1="Yohana";
// name1="Erukala";//Not possible in const
console.log(name1);
//const fruit;//const declaration is must

const fruit ="apple";
console.log(fruit);





//let
//let has block level scope,it is like local variable
{
    let city="Rampur";
    city="kolkata";
    console.log(city);
}
//console.log(city);//wrong accesing the let,out of scope








const arr1=[1,2,3,4,5];
arr1.push(45);//This is possible
//arr1=[23,4,5,6,7];//But this redeclaration is not possible
console.log(arr1);







/*
Most common programing case types
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/
on