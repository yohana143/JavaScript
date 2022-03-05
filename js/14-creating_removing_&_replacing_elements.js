console.log("welcome");
let elt=document.createElement('li');

//Add a class name to the li element
elt.className='child1';
elt.id='createdLi';
elt.setAttribute('title','mytitle'); 
elt.innerText='hello this is yohana';
elt.innerHTML='bshjebwejbhweb';

let ul=document.querySelector('ul.this');
ul.appendChild(elt);
console.log(elt);




//Replacing element

let elt1=document.createElement('h3');
elt1.id='elt1';
elt1.className='elt1';
let tnode=document.createTextNode('This is created node for elt1');
elt1.appendChild(tnode);


elt.replaceWith(elt1);
let myul=document.getElementById('myul');
// myul.replaceChild(elt,document.getElementById('fui'));
// let pr=elt1.hasAttribute('class');
let pr=elt1.hasAttribute('href');
console.log(elt1,pr);