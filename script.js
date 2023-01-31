//! Variables and selectors

const textarea = document.getElementById("textarea");
const messageDiv = document.querySelector(".input-record");
const left_list = document.querySelector(".left-list");
const li = document.querySelector(".lis");
//console.log(li);
const add = document.querySelector("#save");
const del = document.querySelector("#delete");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let ArshiveList = JSON.parse(localStorage.getItem("arshive")) || [];
// console.log(todoList);

//load event vs. DomContentLoaded
window.addEventListener("load", () => {
    getTodoListFromLocalStorage();
});
const getTodoListFromLocalStorage = () => {
    //get TodoList from localStorage and load to UI
    todoList.sort((a,b) => b.id - a.id)
    todoList.forEach((todo)=>{
      left_list.innerHTML += `
      <li id="${todo.id}" class="fa-1x d-flex justify-content-between bg-warning lis m-1 ">
        <i class="fa-solid fa-check"></i>
        <span class="textLi text-dark">${todo.text}</span>
        <i class="fa-solid fa-trash-can text-danger"></i>
      </li>
      `
    });
}

add.addEventListener("click", () => {
  createDiv();
  window.location.reload()
});

left_list.addEventListener("click", (e) =>{
  const idAttr = e.target.closest("li").getAttribute("id")
  console.log(idAttr);
  if(e.target.classList.contains("fa-trash-can")){
    e.target.closest("li").remove()
    todoList = todoList.filter((x) => {
      x.id != idAttr
      ArshiveList.push(x)
      localStorage.setItem("arshive", JSON.stringify(ArshiveList))
    })
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }else if(e.target.classList.contains("fa-check")){
    e.target.nextElementSibling.classList.toggle(`text-decoration-line-through`)
    e.target.classList.toggle(`text-success`)
    todoList.map((x) =>{
      if(x.id == idAttr){
        x.todo =  !x.todo
      }
    })
    localStorage.setItem("todoList", JSON.stringify(todoList))
  }
  
  
  
  // window.location.reload()
})


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
  <li id="${newTodo.id}" class="fa-1x d-flex justify-content-between lis m-1">
    <i class="fa-solid fa-check text-danger"></i>
    <span class="textLi text-dark">${textarea.value}</span>
    <i class="fa-solid fa-trash-can text-danger"></i>
  </li>
  `
  textarea.value= ""
}








