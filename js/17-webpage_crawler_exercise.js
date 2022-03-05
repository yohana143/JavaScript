// go to codewithhaary.com
//go to console
let str='python';
let links=document.links;
console.log(links);

Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(str))
    {
    console.log(href);
    }
});