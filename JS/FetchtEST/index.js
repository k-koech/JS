let form = document.getElementById("todoSearchForm")
form.addEventListener("submit", function(e){
   e.preventDefault();

    let id = parseInt(document.getElementById("id").value);
    searchTodo(id)
})


function searchTodo(id)
{
fetch(`http://localhost:5000/todos/${id}`)
.then(function (response){
   return response.json()
})

.then(function (todo)
{
    console.log("error ", Object.keys(todo).length === 0 )
    todo_container = document.getElementById("todo_container")
    //  document.getElementById("no_of_todos").innerText = todo.length

        
        todo_container.innerHTML =  `
        <div id="single-todo">
            <h4>${todo.title}</h4>
            <p>${todo.description}</p>
            <p>${todo.completed?"Completed":"Not Completed"}</p>
            <button onclick="deleteData(${todo.id})">Delete</button>
        </div>`
        
})
}

// Fetching Data
fetch("http://localhost:5000/todos")
.then(function (response){
   return response.json()
})

.then(function (todos)
{
    console.log(todos)
    todo_container = document.getElementById("todo_container")
     document.getElementById("no_of_todos").innerText = todos.length

        for(let todo of todos)
        {
        todo_container.innerHTML +=  `
        <div id="single-todo">
            <h4>${todo.title}</h4>
            <p>${todo.description}</p>
            <p>${todo.completed?"Completed":"Not Completed"}</p>
            <button id="delete" >Delete</button>
        </div>`
        }
        // onclick="deleteData(${todo.id})
        let del = document.getElementById("delete")
        del.addEventListener("click",function(){
          deleteData(1)
        })
})


//==== Posting Data
let todoForm= document.getElementById("todoForm")
todoForm.addEventListener("submit", function(event){
   event.preventDefault()
   
   let title= document.getElementById("title").value;
   let description= document.getElementById("description").value;
   let completed= document.getElementById("completed").checked;

   console.log(title + " " + description + " xxx" + completed)
   submitData(title, description, completed)
   
})

// Submit Data Function
function submitData(title, description, completed) {
    // return 
    fetch( 'http://localhost:5000/todos', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // "Accept": "application/json"
        },
        body: JSON.stringify( {
            title,
            description,
            completed
        } )
      } )

      .then( function ( response ) {
        return response.json()
      } )

      .then( function (response ) {
        document.getElementById("success").innerText = "Saved successfully"
      } )
}


// ============ Deleting Data
function deleteData(id) {
  alert(typeof(id))
    // return fetch(`http://localhost:5000/todos/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
       
    //   } )

    //   .then( function ( response ) {
    //     return response.json()
    //   } )

    //   .then( function (response ) {
    //     document.getElementById("success").innerText = "Deleted successfully"
    //   } )
}