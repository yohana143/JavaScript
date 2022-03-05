console.log("Welcome");
let cont=document.querySelector('.no')
console.log(cont);


cont=document.querySelector('.container')
console.log(cont.childNodes);//Returns all the nodes of the conatiner,ecah an every tag 


console.log(cont.children);//gives only the children(elements) not any text or comments,it only returns the elements of the container class


let nodeName=cont.childNodes[1].nodeName;//Returns the nodeName(H1) from the childNodes of cont from index 1
console.log(nodeName);


//Node types
// 1.Element
// 2.Attribute
// 3.Text Node
// 4.comments
// 5.document
// 6.docType


let nodeType=cont.childNodes[0].nodeType;//Since at 0th place we have text tag so its node type is 3 and respectively
console.log(nodeType);//H1 node type
console.log(nodeName);//H1







// let container=document.querySelector('div.container');
// console.log(container.children);




let container=document.querySelector('div.container');
// console.log(container.children[1].children);
// console.log(container.children[1].children[0].children);//children of children


console.log(container.lastChild);
console.log(container.firstChild);
console.log(container.firstElementChild);


console.log(container.lastElementChild);

