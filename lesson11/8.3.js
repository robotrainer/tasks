const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите слово:\n');

const reBig = /[A-Z]/g;
const reSmall = /[a-z]/g;

console.log('Big = '+ str.match(reBig).length);
console.log('Small = ' + str.match(reSmall).length);

