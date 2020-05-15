const readlineSync = require("readline-sync");

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let small = 0;
let big = 0;

let str = readlineSync.question('Введите слова с прописными и строчными буквами:\n');

for(let char of str){
  if(upperCase.includes(char)){
    big++;
  }
  else if(char !== ' ' && char !== ',' && char !== '.'){
    small++;
  }
}

console.log('big = ' + big);
console.log('small = ' + small);

