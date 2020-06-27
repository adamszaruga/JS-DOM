/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/



var addTodo = function() {
    var todo = document.getElementById('description');

    if(todo.value != '') {
        var newTodo = document.createElement('li');
        newTodo.innerHTML = todo.value;
        newTodo.className = "todo-item";
    
        todo.value = '';
    
        var list = document.getElementById('todo-list');
        list.appendChild(newTodo);
    }
};

var checkTodo = function(event) {
    var doneTodo = event.target;
    doneTodo.style.textDecoration = 'line-through';
}


var button = document.getElementById('add-button');
button.addEventListener('click', addTodo);

var todoItems = document.getElementsByClassName('todo-item');

for(var i = 0; i < todoItems.length ; i++){
    todoItems[i].addEventListener('click', checkTodo);
}