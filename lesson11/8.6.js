const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

let revStr = str.split('');
revStr.reverse();
revStr = revStr.join('');

console.log(str === revStr);