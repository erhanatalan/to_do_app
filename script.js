//! Variables and selectors

const textarea = document.getElementById("textarea");
const messageDiv = document.querySelector(".input-record");
const left_list = document.querySelector(".left-list");
const li = document.querySelector(".newLi");
//console.log(li);
const add = document.querySelector("#save");
const del = document.querySelector("#delete");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
// console.log(todoList);

//load event vs. DomContentLoaded
window.addEventListener("load", () => {
    getTodoListFromLocalStorage();
});
const getTodoListFromLocalStorage = () => {
    //get TodoList from localStorage and load to UI
    // todoList.forEach((todo)=>{
    //     createTodo(todo);
    // });
}

add.addEventListener("click", (e) => {
  createDiv();
  
});


//! Functions

const createDiv = () =>{
  const newTodo = {
    id: new Date().getTime(),
    text: textarea.value,
    todo: false,
    arshive:false
  }
  todoList.push(newTodo)
  console.log(todoList);
  localStorage.setItem("todoList", JSON.stringify(todoList))

  left_list.innerHTML += `
  <li id="${newTodo.id}" class="text-left fa-1x">
    <i class="fa-solid fa-check text-danger"></i>
    <span class="textLi text-dark ">${textarea.value}</span>
    <i class="fa-solid fa-trash-can text-danger"></i>
  </li>
  `
}





