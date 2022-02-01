// const OBJ_KEY = "OBJ";
// const arrs = [];
// const objId = "id";
// let id = 0;
// let obj = {
//   id: id++,
//   nama: "dicky"
// };
// // Add item
// arrs.push(obj);
// localStorage.setItem(OBJ_KEY, JSON.stringify(arrs));

// // get item
// const getItems = JSON.parse(localStorage.getItem(OBJ_KEY))

// // update item 
// let nameItem = 0;
// for(arr of arrs) {
//   if(arr.id === 0) {
//     arr.nama = "Azka";
//     nameItem = arr.id;
//   }
// }

// localStorage.setItem(OBJ_KEY, JSON.stringify(arrs));

// // Delete Item
// arrs.splice(nameItem, 1);
// localStorage.setItem(OBJ_KEY, JSON.stringify(arrs));

const arrTodo = [];
const TODO_KEY = "TODO";
let idItem = "item";
let id = 0;

function checkStorage() {
  if(typeof(Storage) !== undefined) {
    return true;
  } else {
    alert('tidak dapat menggunakan storage');
    return false;
  }
}

function composeTodoObj(text) {
  return {
    id: Date.now() * 99,
    text: text,
  }
}

function addTodoToStorage() {
  const strObj = JSON.stringify(arrTodo);
  localStorage.setItem(TODO_KEY, strObj);
}

function findTodo() {
  let id;
  for(todo of arrTodo) {
    id = todo.id;
  }
  return id;
}