const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



const addTodo = ()=>{
   const inputText = inputBox.value.trim();
   if(inputText.length <= 0){
    alert("You must wirte something n your to do");
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
   li.appendChild(deleteBtn);

   todoList.appendChild(li);
   inputBox.value = "";
}
addBtn.addEventListener('click', addTodo);
