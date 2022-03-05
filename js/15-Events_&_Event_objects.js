console.log("welcome");
document.getElementById("heading").addEventListener("click", function (e) { //mouseover can also be replaced with click and many events
  let variable;
  console.log("You have clicked heading");
  variable = e.target;
  variable = e.target.className;
  variable = e.target.classList;
  variable = Array.from(e.target.classList);
  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);
  // location.href="//codewithharry.com";
});
