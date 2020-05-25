const fs = require("fs");

const toDo = [
  {
    title: 'Feed Cat',
    completed: true,
  },
  {
    title: 'Buy Products',
    completed: false,
  },
  {
    title: 'Watch Lecture',
    completed: false,
  }
]

fs.writeFileSync('toDo.json', JSON.stringify(toDo));