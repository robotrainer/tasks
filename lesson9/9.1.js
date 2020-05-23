const fs = require("fs");

const toDo = [
  {
    title: 'feed cat',
    completed: true,
  },
  {
    title: 'buy products',
    completed: false,
  },
  {
    title: 'watch lecture'
    completed: false,
  }
]

fs.writeFileSync('toDo.json', JSON.stringify(toDo));