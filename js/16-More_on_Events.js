/*
console.log("welcome");
let btn = document.getElementById("btn");
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);

function func1(e) {
  console.log("Thanks",e);
   e.preventDefault();//Important
}

function func2(e) {
  console.log("Thanks its a double click",e);
  e.preventDefault();//Important
}

function func3(e){
    console.log("Thanks its a mousedown event",e);
    e.preventDefault();
}

*/






/*
document.querySelector('.no').addEventListener('mouseenter',function(){
    console.log('You entered no');
});

document.querySelector('.no').addEventListener('mouseleave',function(){
    console.log('You exited no');
})

*/






document.querySelector('.container').addEventListener('mousemove',function(){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor='rgb(${e.offsetX},${e.offsetX},${e.offsetY})';
    console.log('You triggered mouse move event');
})