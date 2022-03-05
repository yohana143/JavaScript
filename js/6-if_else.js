const age='45';
if(age==20)
{
    console.log("yes");
}
else if(age===45) //else if(age !== 45)
{
    console.log("jbse");
}
else
{
    console.log("no");
}

//Turnary operator
console.log(age==45 ? 'Age is 45' : 'Age  is not 45');


//Switch case
switch(age)
{
    case 18:
        console.log("You are 18");
        break;
        
        case 56:
            console.log("Your are 56");
            break;

        case 55:
            console.log("Youe age is 55");
            break;
        default:
            console.log("Your age is 18");//if no case matches default is printed
            break;
}