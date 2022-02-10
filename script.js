const addBtn = document.querySelector(".addBtn")
const todoInput = document.querySelector("#todoInput")
const todoList = document.querySelector(".todoList");
const pending = document.querySelector(".pending");
const deleteBtn = document.querySelector(".deleteBtn");

let arrOfTodo = []

function setPendingTasks(totalTasksLeft)
{

   pending.innerText = totalTasksLeft;
}

function creatingTasks()
{
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.map((todo,ind)=>{
        const li = document.createElement("li");
        const span = document.createElement("span")
        span.innerText = "X";
        span.classList.add("deleteBtn")
        span.setAttribute(`onclick`,`deleteTask(${ind})`)
        li.innerText = todo.task;
        li.appendChild(span);
        todoList.appendChild(li);
    })
}
function deleteTask(index)
{
    let todos = JSON.parse(localStorage.getItem("todos"))
    todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(todos));
        console.log(todos)
        todoList.innerHTML=""
        setPendingTasks(todos.length)
        creatingTasks()
       
    
}

function getLocalStorage()
{
    if(!localStorage.getItem("todos"))
    {   
        localStorage.setItem("todos",JSON.stringify(arrOfTodo))         
    }
    else{
        let todos = JSON.parse(localStorage.getItem("todos"))
        console.log(todos)
        setPendingTasks(todos.length)
        creatingTasks()
    }
}

function getRandomId()
{
    return Math.floor(Math.random()*100000);
}
function clearInput()
{
    todoInput.value = ""
}
function addTodo(e)
{
    if(todoInput.value!="")
    {
        const task = {
            id:getRandomId(),
            task:todoInput.value.trim()
        }
        let todos = JSON.parse(localStorage.getItem("todos"))
        todos.push(task)
        localStorage.setItem("todos",JSON.stringify(todos));
        console.log(todos)
        todoList.innerHTML=""
        setPendingTasks(todos.length)
        creatingTasks()
       

    }
    else{
        console.log("No Input");
    }

    clearInput()
}
addBtn.addEventListener("click",addTodo);
window.addEventListener("load",getLocalStorage);

