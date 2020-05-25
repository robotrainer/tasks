const chalk = require("chalk");
const fs = require("fs");
const readlineSync = require("readline-sync");

let search = readlineSync.question('Поиск:\n');
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let searchtoDo = JSON.parse(fs.readFileSync('toDo.json'));
let l = search.length;
let flag = true;
let n = -1;

search = search.toLowerCase();


for(let i = 0; i < searchtoDo.length; i++){
  let Do = searchtoDo[i];
  Do.title = Do.title.toLowerCase();
  if(Do.title.indexOf(search) !== -1){
    n = Do.title.indexOf(search);
    console.log(toDo[i].title.slice(0, n) + chalk.red(toDo[i].title.slice(n, n+l)) + toDo[i].title.slice(n+l));
  }
  else{
    flag = false;
  }
}

if(!flag && n === -1){
  console.log('Соответсвующих дел нет!')
}
