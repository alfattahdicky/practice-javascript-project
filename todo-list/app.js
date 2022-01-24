const inputList = document.getElementById('inputList');
const btnAdd = document.getElementById('btnAdd');
const containerListItem = document.querySelector('.list-item');
const btnDelete = document.getElementById('deleteItem');

function templateList(text) {
  const container = document.createElement('div');
  const item = document.createElement('p');
  const itemAction = document.createElement('div');

  container.classList.add('item');
  itemAction.classList.add('item-action');
  item.textContent = text;

  container.appendChild(item);
  container.appendChild(itemAction);
  itemAction.appendChild(createEditButton());
  itemAction.appendChild(createDeleteButton());
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
  return createButton('okButton', 'Ok', function(event) {
    okButton(event.target.parentElement);
  })
}

function deleteButton(e) {
  e.remove();
}

function editButton(e) {
  const text = e.parentElement.firstChild;
  text.style.display = 'none';
  editText(text.innerText);
  e.parentElement.remove();
}

function okButton(e) {
  const input = e.parentElement.firstChild;
  templateList(input.value);
  e.parentElement.remove();
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


btnAdd.addEventListener('click', function(e) {
  const value = e.target.parentElement.firstElementChild;
  if(value.value !== "") {
    templateList(inputList.value);
  }
});