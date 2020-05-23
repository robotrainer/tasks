const fs = require("fs");

let toDo = JSON.parse(fs.readFileSync('toDo.json'));

for(let i = 0; i < toDo.length; i++){
  let Do = toDo[i];
  let str;
  if(Do.completed){
    str = '[x]';
  }
  else{
    str = '[ ]';
  }
  console.log(str + ' ' + (i+1) + '. ' + Do.title);
}