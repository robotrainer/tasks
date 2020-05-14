const readlineSync = require("readline-sync");

let numberWords = parseInt(readlineSync.question('Введите количесвто слов:\n'));
let word = '';

for(let i = 1; i <= numberWords; i++){
  word += readlineSync.question(i + ' слово?\n');
  if(i !== numberWords){
    word += ', ';
  }
}

console.log(word);