//! Variables and selectors

const textarea = document.getElementById("textarea");
const messageDiv = document.querySelector('.input-record');
const left_liste = document.querySelector(".left-list");
const li = document.querySelector(".newLi");
console.log(li);
const add = document.querySelector("#save");
let now = new Date().toString().split("GMT+0300 (GMT+03:00)")[0]
let userSelect;
let count=localStorage.getItem("clickcount");
console.log(count);

//! Event Listeners
add.addEventListener("click",(e)=>{
    if(e.target.getAttribute("id")=="save"){
        userSelect = e.target.getAttribute("id")
        creatDiv()
    }
})

left_liste.addEventListener("click",(ev)=>{
    if(ev.target.tagName="li"){
        ev.target.classList.toggle("checked")
    }
})


//! Functions

function creatDiv(){
    const newList = document.createElement("li");
    newList.className="newLi";
    const dolist = document.createTextNode(textarea.value);
    newList.appendChild(dolist);
    left_liste.appendChild(newList);

    const span= document.createElement("span");
    const nowq = document.createTextNode(now);
    span.className="date";
    span.appendChild(nowq);
    newList.appendChild(span);
    //localStorage.setItem(`list ${count}`, JSON.stringify(newList))
    //window.location.reload()
}

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
}