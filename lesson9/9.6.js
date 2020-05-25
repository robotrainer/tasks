const fs = require("fs");
const readlineSync = require("readline-sync");

let number = readlineSync.question('Какое дело выполнено/невыполнено? Введите номер:\n');
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
const error = 'Такого номер нет!';
let flag = false;
let str;

for(let i = 0; i < toDo.length; i++){
  if(i === number-1){
    flag = true;
  }
}

if(flag){
  toDo[number-1].completed = !toDo[number-1].completed;
  if(toDo[number-1].completed){
    str = '[x]';
    }
  else{
    str = '[ ]';
  }
  fs.writeFileSync('toDo.json', JSON.stringify(toDo));
  console.log(str + ' ' + number + '. ' + toDo[number-1].title);
}
else{
  console.log(error);
}

