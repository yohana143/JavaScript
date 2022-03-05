// let name='Yohana';
// let name2="Erukala";
// // console.log(`HBD ${name}`);

function greet(name3,thanks){
    let msg=(`HBD ${name3} ${thanks}`);
    console.log(msg);
}
let name3="Yohana";
let name4="Erukala";
greet(name3,'Thanks a lot');







const mygreet=function(name,thanks='Thanks a lot')
{
    let msg=`HBD ${name5}`;
    console.log(msg);
}
let name5="Yohana";
let val=mygreet(name5);







const myobj={
    name:"Yohana",
    game:function()//Anonymous function
    {
        return "gta";
    }
}
console.log(myobj.game());









//Scope
var i=546;
console.log(i);
function ul(name)
{
    let i=10;
    {
    return `${name}`;
    }
}
    console.log(ul("Yohana"),i);

