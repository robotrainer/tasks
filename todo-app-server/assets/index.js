let data = [];

async function init() {
  const res = await fetch("/get-todos");
  const data_ = await res.json();
  data = data_;
  render();


  document.querySelector('.addTodo').addEventListener('keypress', (e) => {
    const add = e.target.value;
    if (e.key === 'Enter' && add !== '') {
      fetch('/add', {
        body: JSON.stringify({
          title: add,
          completed: false,
        }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        method: 'POST',
      });
      data.push({ title: add, completed: false });
      e.target.value = '';
      init();
    }
  });

  document.querySelector('.buttonClear').addEventListener('click', () => {
    let clearArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].completed) {
        clearArray.push(data[i]._id);
      }
    }
    fetch('/remove', {
      body: JSON.stringify(clearArray),
      headers: { "Content-Type": "application/json;charset=utf-8", },
      method: 'POST',
    });
    data = data.filter((x) => !x.completed);
    render();
  });

  const setTodoFilter = document.querySelectorAll('.fil');
  for (const filter of setTodoFilter) {
    filter.addEventListener('change', () => {
      render();
    });
  }

  document.querySelector('.search').addEventListener('change', (e) => {
    render();
  });
}

async function render() {
  const filter = await document.querySelector('.fil:checked');
  const str = await document.querySelector('.search').value;
  const re = new RegExp(_.escapeRegExp(str), 'im');
  document.querySelector('.list').innerHTML = data
    .map((item, index) => ({
      todo: item,
      index: index,
    }))
    .filter((y) => filter.value === 'all' ||
      (filter.value === 'completed' && y.todo.completed) ||
      (filter.value === 'uncompleted' && !y.todo.completed))
    .filter((z) =>
      re.test(z.todo.title))
    .map((x) => {
      const titleEscape = _.escape(x.todo.title);
      const title = str !== '' ? titleEscape.replace(re, (c) => `<span style="color: red">${c}</span>`) : titleEscape;
      const check = x.todo.completed ? 'checked' : '';
      return '<div class="item"><label><input type="checkbox" class="checkbox" value="' +
        x.index + '" ' + check + '/>' + (x.index + 1) + '. ' + title +
        '</label><button class="remove" value="' + x.index + '">❌</button></div>'
    })
    .join('');

  document.querySelector('.listTodo').innerHTML = '<div class="numTodo">' +
    data.filter((x) => !x.completed).length + ' дел осталось</div>';


  const removeTodo = document.querySelectorAll('.remove');
  for (let i = 0; i < removeTodo.length; i++) {
    const remove = removeTodo[i];
    let removeIndex = [];
    removeIndex.push(data[i]._id);
    remove.addEventListener('click', () => {
      fetch('/remove', {
        body: JSON.stringify(removeIndex),
        headers: { "Content-Type": "application/json;charset=utf-8", },
        method: 'POST',
      });
      data.splice(remove.value, 1);
      render();
    });
  }

  const toggleTodo = document.querySelectorAll('.checkbox');
  for (let i = 0; i < toggleTodo.length; i++) {
    const toggle = toggleTodo[i];
    const toggleIndex = toggle.value;
    toggle.addEventListener('change', () => {
      fetch('/toggle', {
        body: JSON.stringify({ number: data[i]._id }),
        headers: { "Content-Type": "application/json;charset=utf-8", },
        method: 'POST',
      });
      data[toggleIndex].completed = !data[toggleIndex].completed;
      render();
    });
  }

}

init();