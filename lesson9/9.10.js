const fs = require("fs");

let toDo = JSON.parse(fs.readFileSync('toDo.json'));
let i = 0;

function compareTitles(a, b){
	if(a.title > b.title){
    return 1;
  }
  if(a.title < b.title){
    return -1;
  }
	return 0;
}

function compareCompleted(a, b){
  if(a.completed > b.completed){
    return 1;
  }
  if (a. completed < b.completed){
    return -1;
  }
  return 0;
}

toDo.sort(compareTitles);
toDo.sort(compareCompleted);

fs.writeFileSync('toDo.json', JSON.stringify(toDo));

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