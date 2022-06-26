let state = {

    todos: [
        { id:1, title: 'Go Shopping', completed:false },
        { id:2, title: 'Work Out', completed:false },
        { id:3, title: 'Go to cinema', completed:false },
        { id:4, title: 'See the doctor', completed:false },
        { id:5, title: 'Learn Javascript', completed:false },
        { id:6, title: 'Finish Assigments', completed:true },
    ],

    completedTodos: true,
    nextId : 7
}

function createTodo(title){

    // if todo exists do not create it
    if (state.todos.find(todo => todo.title == title)){
        return;
    }

    // Todo does not exits so we can add it
    let nextTodo = { id : state.nextId++, title:title, completed:false};
    state.todos.push(nextTodo);
}



function deleteTodo(title){
    
    // if todo exists do not create it
    if (state.todos.find(todo => todo.title == title)){
        return;
    }

    // Todo does not exits so we can add it
    state.todos = state.todos.filter(todo => todo.title != title);
}

function deleteAllTodos(){
    state.todos = [];
    state.nextId = 1;
}

function toggleTodo(title){

    // if todo does not exists
    let foundTodo = state.todos.find(todo => todo.title == title); 
    if (!foundTodo){
        return;
    }
    foundTodo.completed = !foundTodo.completed;
}


function doNotShowCompleted(){
    state.completedTodos = !state.completedTodos;
}


function render(){

    document.body.textContent = '';

    let todoListUncompleted = document.createElement('ul');
    let todoListCompleted = document.createElement('ul');

    for (let todo of state.todos){

        let liElement = document.createElement('li');

       
        liElement.textContent = todo.title
        
        if (todo.completed){
            liElement.className = 'todo completed'
            todoListCompleted.append(liElement)
        } else {
            todoListUncompleted.append(liElement)
        }


    }

    document.body.append(todoList);

}
