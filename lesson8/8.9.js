const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите выражение:\n');
let mathOperation = ['**', '*', '/', '%', '+', '-'];
let degree = '';
let arrayStr = str.split('=');
let n = -1;
let operation = 0;

for(let char of arrayStr[0]){
  if(char === '*'){
    degree += char;
  }
  if(mathOperation.includes(degree)){
    n = mathOperation.indexOf(degree);
  }
  else if (mathOperation.includes(char)){
    n = mathOperation.indexOf(char);
  }
}

let numbers = arrayStr[0].split(mathOperation[n]);
numbers[0] = parseInt(numbers[0]);
numbers[1] = parseInt(numbers[1]);
let expression = parseInt(arrayStr[1]);
 
if(n === 0){
  operation = numbers[0] ** numbers[1];
}
else if(n === 1){
  operation = numbers[0] * numbers[1];
}
else if(n === 2){
  operation = numbers[0] /  numbers[1];
}
else if(n === 3){
  operation = numbers[0] % numbers[1];
}
else if(n === 4){
  operation = numbers[0] + numbers[1];
}
else{
  operation = numbers[0] - numbers[1];
}

if(operation === expression){
  console.log(true);
}
else{
  console.log(false);
}

// console.log(arrayStr);
// console.log(numbers);
// console.log(operation);
// console.log(expression);