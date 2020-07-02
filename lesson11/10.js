const fs = require("fs");
const readlineSync = require("readline-sync");
const chalk = require("chalk");

function initTodos(){
  if(!fs.existsSync('todo.json')){
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
    },
    ];

    saveTodos(todos);
  }
}

function saveTodos(todos){
  fs.writeFileSync('todo.json', JSON.stringify(todos));
}


function loadTodos(){
  return JSON.parse(fs.readFileSync('todo.json'));
}

function renderTodo(num, todo){
  let str = todo.completed ? '[' + chalk.green('x') + '] ':
                             '[ ] ';
  return str + num + '. '+ todo.title;
}

function listTodos(type){
  let todos = loadTodos();
  todos
      .map((item, index) => ({
        todo: item,
        index: index,
      }))
      .filter((x) => type === 'all' || (type === 'completed' && x.todo.completed) || (type === 'uncompleted' && !x.todo.completed))
      .forEach((y) => console.log(renderTodo(y.index + 1, y.todo)));
}

function addTodo(newtitle){
  let todos = loadTodos();
  todos.push({
    title: newtitle,
    completed: false,
  })
  saveTodos(todos);
  return console.log(chalk.green('Новое дело добавлено!'));
}

function toggleTodo(num){
  let todos = loadTodos();
  if(num <= todos.length && num > 0){
    todos[num-1].completed = !todos[num-1].completed;
    saveTodos(todos);
    console.log(chalk.green('Статус дела изменён!'));
    console.log(renderTodo(num, todos[num-1]));
  }
  else{
    nonum();
  }
}

function removeTodo(num){
  let todos = loadTodos();
  const error = 'Такого номера нет!';
  if(num <= todos.length && num > 0){
    todos.splice(num-1, 1);
    saveTodos(todos);
    console.log(chalk.green('Дело ' + num + ' удалено!'));
  }
  else{
    nonum();
  }
}

function nonum(){
  return console.log(chalk.red('Такого номер нет!'));
}

function clearTodos(){
  let todos = loadTodos();
  let firstLength = todos.length;
  todos = todos.filter((x) => !x.completed);
  saveTodos(todos);
  console.log(chalk.green('{'+ (firstLength - todos.length) +'} дел удалено!'));
}

function searchTodos(str){
  let todos = loadTodos();
  let reLower = new RegExp(str.toLowerCase(), 'g');
  let reUpper = new RegExp(str.toUpperCase(), 'g');
  todos
      .map((item, index) => ({
        todo: item,
        index: index,
      }))
      .filter((x) => 
        x.todo.title.includes(str.toLowerCase()) || x.todo.title.includes(str.toUpperCase())
      )
      .forEach((y) => {
        y.todo.title = y.todo.title.replace(reLower, chalk.red(str.toLowerCase()))
        y.todo.title = y.todo.title.replace(reUpper, chalk.red(str.toUpperCase()))
        console.log(renderTodo(y.index + 1, y.todo))
       });
}

function sortTodos(){
  let todos = loadTodos();

  function compare(a, b){
    if(a.completed > b.completed){
      return 1;
    }
    if (a.completed < b.completed){
      return -1;
    }
    if(a.title > b.title){
      return 1;
    }
    if(a.title < b.title){
      return -1;
    }
    return 0;
  }

  todos.sort(compare);
  saveTodos(todos);
}

function wrong(){
  return console.log(chalk.red('Неверная команда!'));
}

function help(){
  let help = 
  chalk.green('Список всех доступных команды:\n') + 
  chalk.green('list') + ' - выводит список невыполненных дел\n' +
  chalk.green('list-all') + ' - выводит список всех дел\n' +
  chalk.green('list-completed') + ' - выводит список выполненных дел\n' + 
  chalk.green('add') + chalk.magenta(' новое дело') + ' - добавляет выше новое дело\n' + 
  chalk.green('toggle') + chalk.magenta(' x') + ' - меняет статус дела,' + chalk.magenta(' x') + ' - номер дела\n' +
  chalk.green('remove') + chalk.magenta(' x') + ' - удаляет дело,' + chalk.magenta(' x') + ' - номер дела\n' + 
  chalk.green('clear') + ' - удаляет все выполненные дела\n' + 
  chalk.green('sort') + ' - сортирует список дел\n' + 
  chalk.green('search') + chalk.magenta(' x') + ' - поиск дел по соответсвию,' + chalk.magenta(' x') + ' - искомая строка\n' +
  chalk.green('exit') + ' - выход из программы'
  return console.log(help);
}

initTodos();

console.log(chalk.blue('Приветствую! Список дел запущен.')+
  '\nЧтобы узнать все доступные команды, введите команду ' + chalk.green('help'));

while(true){
  let enter = readlineSync.question(chalk.yellow('Введите команду:\n'));
  let words = enter.split(' ');
  let command = words[0];

  if(command === 'help'){
    help();
  }
  else if(command === 'list'){
    console.log(chalk.green('Список невыполненных дел:'));
    listTodos('uncompleted');
  }
  else if(command === 'list-all'){
    console.log(chalk.green('Список всех дел:'));
    listTodos('all');
  }
  else if(command === 'list-completed'){
    console.log(chalk.green('Список выполненных дел:'));
    listTodos('completed');
  }
  else if(command === 'add'){
    let title = words.slice(1).join(' ');
    addTodo(title);
  }
  else if(command === 'toggle'){
    let num = parseInt(words[1]);
    toggleTodo(num);
  }
  else if(command === 'remove'){
    let num = parseInt(words[1]);
    removeTodo(num);
  }
  else if(command === 'clear'){
    clearTodos();
  }
  else if(command === 'search'){
    console.log(chalk.green('Поиск:'));
    searchTodos(words[1]);
  }
  else if(command === 'sort'){
    sortTodos();
    console.log(chalk.green('Список отсортирован:'));
    listTodos('all');
  }
  else if(command === 'exit'){
    console.log(chalk.blue('Список дел закрыт. До свидания!'));
    break;
  }
  else{
    wrong();
  }
}
