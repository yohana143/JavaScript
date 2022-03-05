//1.Single element selector

console.log("Welcome");

let element=document.getElementById('myfirst');
// console.log(element);



// element=element.className;
// console.log(element);


// element=element.childNodes;
// console.log(element);



// element=element.parentNode;
// console.log(element);


// element.style.color='red';
// console.log(element);


// element.innerText='Harry is a good boy';
// element.innerHTML='<b>Harry is a good boy</b>';
// console.log(element.innerText);


// let sel=document.querySelector('#myfirst');
// sel=document.querySelector('.child');
// console.log(sel);



let sel=document.querySelector('#myfirst');
sel=document.querySelector('.child');
sel=document.querySelector('div');
sel=document.querySelector('h1');
sel.style.color='green';
console.log(sel);




//2.Multi Element selector
// let elt=document.getElementsByClassName('child');
// console.log(elt[0]);

            //OR

let elt=document.getElementsByClassName('child');
elt=document.getElementsByClassName('conatainer');
elt=document.getElementsByTagName('div');
console.log(elt);


// Array.from(elt).forEach(element =>
// {
//     console.log(element)
//     element.style.color='blue';
// });

    //OR

for (let index = 0; index < elt.length; index++) {
    const element = elt[index];
    console.log(element);
    element.style.color='red';
}



