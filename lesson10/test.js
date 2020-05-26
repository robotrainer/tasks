const fs = require("fs");
const readlineSync = require("readline-sync");

let todos = [
  {
    title: 'Feed Cat',
    completed: true,
  },
  {
    title: 'Buy Products',
    completed: false,
  },
  {
    title: 'Watch Lecture',
    completed: false,
  }
];

function initTodos(){
  if(!fs.existsSync('todo.json')){
    saveTodos(todos);
  }
}

function saveTodos(todos){
  fs.writeFileSync('todo.json', JSON.stringify(todos));
}


function loadTodos(){
  return todos = JSON.parse(fs.readFileSync('todo.json'));
}

function renderTodo(num, todo){
  let str;
  if(todo.completed){
    str = '[x] ';
  }
  else{
    str = '[ ] ';
  }
  return console.log(str + num + '. '+ todo.title);
}

function listTodos(type){
  loadTodos();
  if(type === 'list-all'){
    for(let i = 0; i < todos.length; i++){
      renderTodo(i+1, todos[i]);
    }
  }
  else if(type === 'list'){
    for(let i = 0; i < todos.length; i++){
      if(!todos[i].completed){
        renderTodo(i+1, todos[i]);
      }
    }
  }
  else if(type === 'list-completed'){
    for(let i = 0; i < todos.length; i++){
      if(todos[i].completed){
        renderTodo(i+1, todos[i]);
      }
    }
  }
}

function addTodo(newtitle){
  if(newtitle.indexOf('add') !== -1 && newtitle !== 'add' && newtitle !== 'add '){
    newtitle = newtitle.replace('add ', '');
    loadTodos();
    todos.push({
      title: newtitle,
      completed: false,
    })
    saveTodos(todos);
    return console.log('Новое дело добавлено!');
  }
}

function toggleTodo(num){
  if(num.indexOf('toggle') !== -1 && num !== 'toggle' && num !== 'toggle '){
    num = parseInt(num.replace('toggle ', ''));
    loadTodos();
    const error = 'Такого номер нет!';
    if(num <= todos.length && num > 0){
      todos[num-1].completed = !todos[num-1].completed;
      saveTodos(todos);
      renderTodo(num, todos[num-1]);
    }
    else{
      return console.log(error);
    }
  }
}

let command = '';

initTodos();
while(command !== 'exit'){
  command = readlineSync.question('command?\n');
  listTodos(command);
  addTodo(command);
  toggleTodo(command);
}
