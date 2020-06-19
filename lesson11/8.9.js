const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

const re = /^(\d+)([*/+\-])(\d+)=(\d+)$/g;

let match = re.exec(str);
match[1] = parseInt(match[1]);
match[3] = parseInt(match[3]);

let result = match[2] === '*' ? match[1] * match[3]:
             match[2] === '/' ? match[1] / match[3]:
             match[2] === '+' ? match[1] + match[3]:
                                match[1] - match[3];

console.log(result === parseInt(match[4]));