const readlineSync = require("readline-sync");
const _ = require('lodash');

let str = readlineSync.question('Введите слово:\n');

let revStr = str.split('');
_.reverse(revStr);
revStr = revStr.join('');

console.log(str === revStr);