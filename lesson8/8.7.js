const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слова:\n');
let arrayStr = str.split(' ');
let array = [];

for(let word of arrayStr){
  if(word !== ''){
    array.push(word);
  }
}

//console.log(array);
console.log('"' + array.join(' ') + '"');