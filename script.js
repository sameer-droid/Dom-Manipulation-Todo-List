function loadtodos(){

    const todos= JSON.parse(localStorage.getItem("todos"))||{"todolist":[]};
    console.log(todos);
    return todos;
}
function addtodotolocalstorage(todotext){
     const todos=loadtodos();
     todos.todolist.push(todotext);
     localStorage.setItem("todos",JSON.stringify(todos));
}
function appendtodoinhtml(todotext){
    const todolist = document.getElementById("todolist");
    const todo= document.createElement("li");
    todo.textContent=todotext;
    todolist.appendChild(todo);
}

document.addEventListener("DOMContentLoaded",()=>{
    const todoinput= document.getElementById("todoinput");
    const submitbutton = document.getElementById("addto");
    const todolist= document.getElementById("todolist");
    submitbutton.addEventListener("click",(event)=>{
     const todotext = todoinput.value;
     if(todotext==""){
        alert("please write something for the todo");
     }else{
        addtodotolocalstorage(todotext);
        appendtodoinhtml(todotext);
        todoinput.value='';
     }
    });
    todoinput.addEventListener("change",(event)=>{
        const todotext=event.target.value;
        event.target.value=todotext.trim();
       console.log(todotext);

    });

    const todos =loadtodos();
    todos.todolist.foreach(todo=>{
        const newtodoitem=document.createElement("li");
        newtodoitem.textcontent=todo;
        todolist.appendChild(newtodoitem);
    })
});