const chalk = require("chalk");
const fs = require("fs");
const readlineSync = require("readline-sync");

let search = readlineSync.question('Поиск:\n');
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let l = search.length;
let flag = false;

search = search.toLowerCase();


for(let Do of toDo){
  let title = Do.title.toLowerCase();
  if(title.indexOf(search) !== -1){
    let n = title.indexOf(search);
    console.log(Do.title.slice(0, n) + chalk.red(Do.title.slice(n, n+l)) + Do.title.slice(n+l));
    flag = true;
  }
}

if(!flag){
  console.log('Соответсвующих дел нет!')
}
