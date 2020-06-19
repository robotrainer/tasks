const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

const re = /(\s+)/g;

const newStr = str.replace(re, ' ');

console.log('"' + newStr + '"');