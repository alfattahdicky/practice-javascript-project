const inputList = document.getElementById('inputList');
const btnAdd = document.getElementById('btnAdd');
const containerListItem = document.querySelector('.list-item');
let idEditText;
let idMakeTodo;

function templateList(id, text) {
  const container = document.createElement('div');
  const item = document.createElement('p');
  const itemAction = document.createElement('div');

  container.classList.add('item');
  container.setAttribute('id', id);
  itemAction.classList.add('item-action');
  item.classList.add('nama_barang');
  item.textContent = text;

  container.appendChild(item);
  container.appendChild(itemAction);
  itemAction.appendChild(createEditButton());
  itemAction.appendChild(createDeleteButton());
  return containerListItem.appendChild(container);
}

function editText(value) {
  const container = document.createElement('div');
  const item = document.createElement('input');
  const itemAction = document.createElement('div');

  container.classList.add('item');
  itemAction.classList.add('item-action');
  item.classList.add('inputEdit');
  item.setAttribute('type', 'text');
  item.setAttribute('value', value);

  container.appendChild(item);
  container.appendChild(itemAction);
  itemAction.appendChild(createOkEditButton());
  return containerListItem.appendChild(container);
}


function createButton(nameId, text, eventListener) {
  const button = document.createElement('button');
  button.setAttribute('id', nameId);
  button.innerText = text;

  button.addEventListener('click', function(event) {
    eventListener(event);
  })

  return button;
}

btnAdd.addEventListener('click', function(e) {
  const input = e.target.parentElement.firstElementChild;

  if(input.value !== "") {
    if(checkStorage()) {
      arrTodo.push(composeTodoObj(inputList.value));
      templateList(findTodo(), inputList.value);
      addTodoToStorage();
    }
  }
  input.value = "";
});

function createEditButton() {
  return createButton('editButton', 'Edit', function(event){
    editButton(event.target.parentElement);
  })
}

function createDeleteButton() {
  return createButton('deleteButton', 'Delete', function(event) {
    deleteButton(event.target.parentElement.parentElement);
  });  
}

function createOkEditButton() {
  return createButton('okButton', 'OK', function(event) {
    okButton(event.target.parentElement);
  })
}

function deleteButton(e) {
  const getIdItem = e.getAttribute('id');
  let index = 0;
  for(todo of arrTodo) {
    if(todo.id.toString() === getIdItem) {
      arrTodo.splice(index, 1);
      e.remove();
    }
    index++;
  }
  addTodoToStorage();
}

function editButton(e) {
  const text = e.parentElement.firstChild;
  idEditText = e.parentElement.getAttribute('id');

  editText(text.innerText);
  text.style.display = 'none';
  e.parentElement.remove();
}

function okButton(e) {
  const input = e.parentElement.firstChild;
  for(todo of arrTodo) {
    if(todo.id.toString() === idEditText) {
      todo.text = input.value;
    }
  }
  templateList(idEditText, input.value);
  addTodoToStorage();
  e.parentElement.remove();
}

document.addEventListener('DOMContentLoaded', function() {
  if(checkStorage()) {
    const datas = JSON.parse(localStorage.getItem(TODO_KEY));
    if(datas !== null) {
      for(data of datas) {
        templateList(data.id, data.text);
        arrTodo.push({
          id: data.id,
          text: data.text
        });
      }
    } 
  }
});
