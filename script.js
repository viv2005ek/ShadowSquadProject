

function goToBookmark(value) {
    window.location.href = value;
  }

let mode="light";


let mod=document.querySelector("#mode");
mod.addEventListener("click",(e) =>{
  if (mode === "light") {
    mode = "dark";
    document.body.style.backgroundColor = "black";
  } else {
    mode = "light";
     document.body.style.backgroundColor = "white";
  }}
);