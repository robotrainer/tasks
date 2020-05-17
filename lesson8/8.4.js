const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слова через пробел:\n');

let bigWord = '';
let max = 0;

let arrayStr = str.split(' ');

for( let word of arrayStr){
  if(word.length > max){
    max = word.length;
    bigWord = word;
  }
}

console.log(bigWord);