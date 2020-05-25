const fs = require("fs");
const readlineSync = require("readline-sync");

let newtodo = readlineSync.question('Какое дело вы хотите добавить?\n');
let toDo = JSON.parse(fs.readFileSync('toDo.json'));

toDo.push({
	title: newtodo,
	completed: false,
})

fs.writeFileSync('toDo.json', JSON.stringify(toDo));
console.log('Новое дело добавлено!');

