const fs = require("fs");

let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let i = 0;

for(let Do of toDo){
  if(!Do.completed){
    i++;
    console.log(i + '. ' + Do.title);
  }
}