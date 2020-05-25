const fs = require("fs");
const readlineSync = require("readline-sync");

let number = readlineSync.question('Какое дело удалить? Введите номер:\n');
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let flag = false;
let error = 'Такого номера нет!';

for(let i = 0; i < toDo.length; i++){
  if(i === number-1){
    flag = true;
  }
}

if(flag){
  toDo.splice(number-1, 1);
  fs.writeFileSync('toDo.json', JSON.stringify(toDo));
  console.log('Дело удалено!');
}
else{
  console.log(error);
}
