let state = {

    todos: [
        { id:1, title: 'Go Shopping', completed:false },
        { id:2, title: 'Work Out', completed:false },
        { id:3, title: 'Go to cinema', completed:false },
        { id:4, title: 'See the doctor', completed:true },
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


function renderCreateTodoForm() {
    let formEl = document.createElement('form')
    let titleInput = document.createElement('input')
    titleInput.type = 'text'
    let createTodoButton = document.createElement('button')
    createTodoButton.textContent = 'Create TODO'

    formEl.addEventListener('submit', function (event) {
      event.preventDefault()
      createTodo(titleInput.value)
      render()
    })
  
    formEl.append(titleInput, createTodoButton)
    document.body.append(formEl)
  }


  function renderShowCompleted() {
    let showCompletedLabel = document.createElement('label')
    showCompletedLabel.textContent = 'Show completed: '
  
    let showCompletedCheckbox = document.createElement('input')
    showCompletedCheckbox.type = 'checkbox'
    if (state.showCompleted) showCompletedCheckbox.checked = true
    showCompletedCheckbox.addEventListener('click', function () {
        doNotShowCompleted()
      render()
    })
  
    showCompletedLabel.append(showCompletedCheckbox)
    document.body.append(showCompletedLabel)
  }



function createH2Title(title){
    let h2Ele = document.createElement('h2');
    h2Ele.className = 'header'
    h2Ele.textContent = title

    return h2Ele
}

function render(){

    document.body.textContent = '';

    let optionsTitle = createH2Title('Options')
    document.body.append(optionsTitle);

    renderShowCompleted()
    renderCreateTodoForm()
    let todoList = document.createElement('ul');
    todoList.className = 'todo-list'
    
    let completedTodo = document.createElement('ul');
    completedTodo.className = 'completed-list'
   
    for (let todo of state.todos){
        
        let liElement = document.createElement('li');
        liElement.textContent = todo.title 

        liElement.addEventListener('click', function(){
            toggleTodo(todo.title)
            render()
        })
        
        if (todo.completed){
            liElement.className = 'todo completed'
            completedTodo.append(liElement)
        } else {
            liElement.className = 'todo'
            todoList.append(liElement)
        }
    }

    // H2 Title for todos
    let todoTitle = createH2Title('Todo')
    document.body.append(todoTitle);

    document.body.append(todoList);
    // H2 Title
    let completedTitle = createH2Title('Completed')
    document.body.append(completedTitle);
    document.body.append(completedTodo);
}

render();
