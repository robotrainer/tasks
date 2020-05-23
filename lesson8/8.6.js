const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');
let word = '';

for(let i = str.length - 1; i >= 0; i--){
	word += str[i];
}

console.log(str === word);