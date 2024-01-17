const todos=document.getElementById('todos')
fetch('http://localhost:3000/')
.then((response) => response.json())
.then((data)=> {
   for (i=0;i<data.length;i++){
    const todo2= data[i]
    const li2=document.createElement('li')
    li2.innerHTML = todo2
    todos.append(li2)
   }
    
})