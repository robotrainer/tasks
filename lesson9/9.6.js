const fs = require("fs");
const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question('Какое дело выполнено/невыполнено? Введите номер:\n'));
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
const error = 'Такого номер нет!';
let str;

if(number <= toDo.length && number > 0){
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

