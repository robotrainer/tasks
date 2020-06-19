const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

const re = /(^\w)|\s(\w)/g;

function replacer(match, offset, string){
  return match.toUpperCase();
}

const newStr = str.replace(re, replacer);

console.log('"' + newStr + '"');