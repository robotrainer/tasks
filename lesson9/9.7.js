const fs = require("fs");
const readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question('Какое дело удалить? Введите номер:\n'));
let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let error = 'Такого номера нет!';

if(number <= toDo.length && number > 0){
  toDo.splice(number-1, 1);
  fs.writeFileSync('toDo.json', JSON.stringify(toDo));
  console.log('Дело удалено!');
}
else{
  console.log(error);
}
