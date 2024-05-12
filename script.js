const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



const addTodo = ()=>{
   const inputText = inputBox.value.trim();
   if(inputText.length <= 0){
    alert("You must write something in your to do list");
    return false;
   }
   //create p tag
   const li = document.createElement("li");
   const p = document.createElement("p");
   p.innerHTML = inputText;
   li.appendChild(p);

   //deleteBtn
   const deleteBtn = document.createElement("button");
   deleteBtn.innerText = "Delete";
   deleteBtn.classList.add("btn", "deleteBtn");
   li.appendChild(deleteBtn);

   todoList.appendChild(li);
   inputBox.value = "";
}


const updateTodo = (e)=>{
   console.log(e.target.innerHTML);
   if(e.target.innerHTML === "Delete"){
      console.log(e.target.parentElement);
      todoList.removeChild(e.target.parentElement);
   }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);