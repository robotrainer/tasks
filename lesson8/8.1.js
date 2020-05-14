const readlineSync = require("readline-sync");

let words = '';
let numeral = ['Первое', 'Второе', 'Третье'];

for(let i = 0; i < 3; i++){
  words += readlineSync.question(numeral[i] + " слово:\n");
  if(i !== 2){
    words += ', ';
  }
}

console.log(words);

