//! Variables and selectors

const textarea = document.getElementById("textarea");
const left_list = document.querySelector('.content-box--left');
const right_list = document.querySelector('.content-box--right');
const messageDiv = document.querySelector('.input-record');
const left_liste = document.querySelector(".left-list");
const add = document.querySelector("#save");
let userSelect;
console.log(textarea.value);




//! Event Listeners


add.addEventListener("click",(e)=>{
    if(e.target.getAttribute("id")=="save"){
        userSelect = e.target.getAttribute("id")
        const newList = document.createElement("li");
        newList.className="newLi";
        const dolist = document.createTextNode(textarea.value);
        newList.appendChild(dolist);
        left_liste.appendChild(newList);
    }
})




//! Functions

function creatDiv(){
    const newDiv = document.createElement('div');
    const currentText = document.createTextNode(textarea.value)
    newDiv.className = 'div-group-item';
    newDiv.appendChild(currentText);
    left_list.appendChild(newDiv);
}

