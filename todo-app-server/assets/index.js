function init(){
  fetch("/get-todos").then(res => {
    res.json().then((data) => {
      document.querySelector('.list').innerHTML = data
      .map(item => '<div class="item"><label><input type="checkbox"/>'+ item.title +'</label><button class="remove">❌</button></div>')
      .join('');
    });
  });
}

init();