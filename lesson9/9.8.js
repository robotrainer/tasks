const fs = require("fs");

let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let n = 0;


for(let i = 0; i < toDo.length; i++){
  let Do = toDo[i];
  if(Do.completed){
    toDo.splice(toDo.indexOf(Do), 1);
    n++;
  }
}

fs.writeFileSync('toDo.json', JSON.stringify(toDo));

console.log('{'+n+'} дел удалено!');