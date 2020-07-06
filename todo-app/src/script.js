const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json')
const data = JSON.parse(fs.readFileSync(dataPath));

function render(){
  document.querySelector('.list').innerHTML = data
    .map(item => '<div class="item"><button class="remove">❌</button>' + item +'</div>')
    .join('');

  const buttons = document.querySelectorAll('.remove');
  for (let i = 0; i < buttons.length; i++){
    const button = buttons[i];
    button.addEventListener('click', () => {
      data.splice(i, 1);
      fs.writeFileSync(dataPath, JSON.stringify(data));
      render();
    });
  }
}

render();