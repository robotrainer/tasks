const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите выражение:\n');
let mathOperation = ['**', '*', '/', '%', '+', '-'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let newStr = '';
let numberStr = [];
let degree = '';
let operationStr = [];

for(let i = 0; i < str.length; i++){
  let char = str[i];

  if(numbers.includes(char)){
    newStr += char;
  }
  if((newStr.length > 0 && !numbers.includes(char))|| i === str.length - 1){
    numberStr.push(parseInt(newStr));
    newStr = '';
  }

  if(mathOperation.includes(char)){
    if (char === '*') {
      degree += char;
    }
    else{
      operationStr.push(char);
    }
  }
  if(!mathOperation.includes(char) && degree === '*'){
    operationStr.push(degree);
    degree = '';
  }
  if(!mathOperation.includes(char) && degree === '**'){
    operationStr.push(degree);
    degree = '';
  }
}

console.log(numberStr);

for(i = 0; i < operationStr.length; i++){
  if(operationStr[i] === '**'){
    numberStr[i+1] = numberStr[i]**numberStr[i+1];
  }
  else if(operationStr[i] === '*'){
    numberStr[i+1] = numberStr[i]*numberStr[i+1];
  }
  else if(operationStr[i] === '/'){
    numberStr[i+1] = numberStr[i]/numberStr[i+1];
  }
  else if(operationStr[i] === '%'){
    numberStr[i+1] = numberStr[i]%numberStr[i+1];
  }
  else if(operationStr[i] === '+'){
    numberStr[i+1] = numberStr[i]+numberStr[i+1];
  }
  else{
    numberStr[i+1] = numberStr[i]-numberStr[i+1];
  }
}

console.log(numberStr);
console.log(operationStr);
console.log(numberStr[numberStr.length-1]);