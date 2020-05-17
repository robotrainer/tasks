const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');
let word = '';

for(let i = str.length - 1; i >= 0; i--){
	word += str[i];
}

if(str === word){
	console.log(true);
}
else{
	console.log(false);
}