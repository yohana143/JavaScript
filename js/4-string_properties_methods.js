const name='yohana';
const greeting="GOOD MORNING";
console.log(greeting +' '+ name);





let html;
html="<h1>this is heading</h1> + <p>this is paragraph</p>";
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html[5]);
console.log(html[0]);

/*
console.log(html.indexOf('a'));
console.log(html.lastIndexOf('s'));
console.log(html.indexOf('h'));
console.log(html.charAt(3));
console.log(html.indexOf("heading"));
console.log(html.endsWith('str2jhb'));
console.log(html.includes("is"));
console.log(html.substring(1,3));
console.log(html.slice(0,4));
console.log(html.split('>'));
console.log(html.replace('this', 'it'));
*/


let fruit1='Organe';
let fruit2='Apple';
let myhtml=`Hello ${name}
            <h1> This is heading</h2>
            <p> you like ${fruit1} and ${fruit2}`;
document.body.innerHTML=myhtml;























