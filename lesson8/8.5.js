const readlineSync = require("readline-sync");

let str = readlineSync.question('Введите строку:\n');
let p = parseInt(readlineSync.question('Введите индек начала строки, который необходимо вырезать:\n'));
let l = parseInt(readlineSync.question('Введите длину строки, котору необходимо вырезать:\n'));

console.log(str.slice(str, p) + str.slice(p+l));