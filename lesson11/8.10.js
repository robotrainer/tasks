const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите выражение:\n');

const re = /([+\-*/]|\*\*)?(\d+)/g;

let match;
let result = 0;

while(match = re.exec(str)){
  const op = match[1] || '+';
  const num = parseInt(match[2]);
  result = op === '+' ? result + num:
           op === '*' ? result * num:
           op === '/' ? result / num:
           op === '-' ? result - num:
                        result ** num;   
}

console.log(result);
