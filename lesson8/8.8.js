const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слова:\n');
let arrayStr = str.split(' ');
let newStr = '';

for(let i = 0; i < arrayStr.length; i++){
  newStr += arrayStr[i].slice(0,1).toUpperCase() + arrayStr[i].slice(1);
  if(i !== arrayStr.length - 1){
    newStr += ' ';
  }
}

console.log(newStr);