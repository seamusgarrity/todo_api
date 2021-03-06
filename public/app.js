$(document).ready(function(){
    $.getJSON("http://localhost:8000/api/todos")
    .then(addTodos)

    $("#todoInput").keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    })
    
    $(".list").on("click","li",function(){
        updateTodo($(this))
    })

    $(".list").on("click","span",function(e){
        e.stopPropagation();
        removeTodo($(this).parent())
    })
});

function addTodos(todos){
    //add todos to page here
    todos.forEach(function(todo){
        addTodo(todo);
    })
}


function createTodo(){

    var usrInput = $("#todoInput").val();
    $.post("/api/todos",{name: usrInput})
    .then(function(newTodo){
        $("#todoInput").val("");
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function addTodo(todo){
    var newTodo = $('<li class="task">'+ todo.name + "<span>X</span></li>");
    newTodo.data("id", todo._id);
    newTodo.data("completed", todo.completed);
    if(todo.completed){
        newTodo.addClass("done");
    }
    
    $(".list").append(newTodo);
}

function removeTodo(todo){
    var clickedId = todo.data("id");
    var deleteUrl = "/api/todos/"+clickedId;
       $.ajax({
           method: "delete",
           url: deleteUrl
       })
       .then(function(data){
            todo.remove();
       })
       .catch(function(err){
           console.log(err);
       })
}

function updateTodo(todo){

    var updateUrl = "/api/todos/"+ todo.data("id");
    var isDone = !todo.data("completed");
    var updatedData = {completed: isDone};
       $.ajax({
           method: "PUT",
           url: updateUrl,
           data: updatedData
       })
       .then(function(updateTodo){
            todo.toggleClass("done");
            todo.data("completed",isDone);
       })
       .catch(function(err){
           console.log(err);
       })
}