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
      render();
    }
  });

  document.querySelector('.buttonClear').addEventListener('click', () => {
    let clearArray = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].completed) {
        clearArray.push(i);
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

function render() {
  const filter = document.querySelector('.fil:checked');
  const str = document.querySelector('.search').value;
  const re = new RegExp(_.escapeRegExp(str), 'gi');
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

  const removeTodo = document.querySelectorAll('.remove');
  for (let i = 0; i < removeTodo.length; i++) {
    const remove = removeTodo[i];
    let removeIndex = [];
    removeIndex.push(remove.value);
    remove.addEventListener('click', () => {
      fetch('/remove', {
        body: JSON.stringify(removeIndex),
        headers: { "Content-Type": "application/json;charset=utf-8", },
        method: 'POST',
      });
      data.splice(removeIndex, 1);
      render();
    });
  }

  const toggleTodo = document.querySelectorAll('.checkbox');
  for (let i = 0; i < toggleTodo.length; i++) {
    const toggle = toggleTodo[i];
    const toggleIndex = toggle.value;
    toggle.addEventListener('change', () => {
      fetch('/toggle', {
        body: JSON.stringify({ number: toggleIndex }),
        headers: { "Content-Type": "application/json;charset=utf-8", },
        method: 'POST',
      });
      data[toggleIndex].completed = !data[toggleIndex].completed;
      render();
    });
  }

}

init();