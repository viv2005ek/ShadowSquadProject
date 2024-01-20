

let mode = "light";

let mod = document.querySelector("#mode");
document.body.style.backgroundImage="url(whiteDesginBack.jpg)";

mod.addEventListener("click", (e) => {
  if (mode == "light") {
    mode = "dark";
document.body.style.backgroundImage="url(blackDesginBack.jpg)";
  } else {
    mode = "light";
document.body.style.backgroundImage="url(vinisha_delete.jpg)";

  }
});

function goToBookmark(value) {
    window.location.href = value;
  }


let gchild1=document.querySelector("gchild1");
let gchild3=document.querySelector("gchild3");
let gchild5=document.querySelector("gchild5");

gchild1.addEventLisetener("click",()=>{
window.location.href = "";
})

child3.addEventLisetener("click",()=>{
  goToBookmark("https://www.google.com/");
})
child5.addEventLisetener("click",()=>{
  goToBookmark("https://www.google.com/");
})

















