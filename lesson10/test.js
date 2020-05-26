const fs = require("fs");

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
  fs.stat('todo.json', function(err, stats){
  if(err){
    saveTodos(todos);
  }
});
}

function saveTodos(todos){
  fs.writeFileSync('todo.json', JSON.stringify(todos));
}


function loadTodos(){
  return todos = JSON.parse(fs.readFileSync('todo.json'));
}

initTodos();
loadTodos();