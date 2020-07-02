const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

const re = /\b\w/g;

function replacer(match, offset, string){
  return match.toUpperCase();
}

const newStr = str.replace(re, replacer);

console.log('"' + newStr + '"');