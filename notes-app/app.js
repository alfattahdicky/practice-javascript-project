const createNoteEl = document.querySelector('.wrap-addNote');
const containerCreateEl = document.querySelector('.container-create');
const containerEl = document.getElementById('container');
const btnCloseEl = document.getElementById('btnClose');
const btnSaveEl = document.getElementById('btnSave');
const btnDoneEl = document.getElementById('btnDone');
const inputTitleEl = document.getElementById('inputTitle');
const inputDescriptionEl = document.getElementById('inputDescription');

function createNoteElement(title, description) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  const settingEl = document.createElement('div');
  settingEl.classList.add('setting');
  settingEl.append(createEditButton(), createDeleteButton());

  const titleEl = document.createElement('h1');
  titleEl.classList.add('title');
  titleEl.innerText = title;

  const descriptionEl = document.createElement('p');
  descriptionEl.classList.add('description');
  descriptionEl.innerText = shortDescription(description);

  const dateEl = document.createElement('date');
  dateEl.classList.add('date');
  dateEl.innerText = generateDate();

  cardEl.append(settingEl, titleEl, descriptionEl, dateEl);
  containerEl.appendChild(cardEl);

  btnSaveEl.style.display = 'none';
  btnDoneEl.style.display = 'block';

}

function shortDescription(description) {
  return description.split(' ').filter((e, i) => i < 10).join(' ');
}

function generateDate() {
  const fullDate = new Date();
  const date = fullDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const time = fullDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${date} at ${time}`;
}

function createDeleteButton() {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'btn btn-delete';
  buttonEl.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.style.display = 'none';
  });

  return buttonEl;
};

function createEditButton() {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'btn btn-edit';
  buttonEl.addEventListener('click', function (e) {
    btnSaveEl.style.display = 'block';
    btnDoneEl.style.display = 'none';

    let cardTitle = e.target.parentElement.parentElement.children[1].innerText;
    let cardDescription = e.target.parentElement.parentElement.children[2].innerText;

    let inputTitle = containerCreateEl.children[2].children[0];
    let inputDescription = containerCreateEl.children[2].children[1];

    inputTitle.value = cardTitle;
    inputDescription.value = cardDescription;

    btnSaveEl.onclick = function () {
      e.path[2].children[1].innerText = inputTitle.value;
      e.path[2].children[2].innerText = inputDescription.value;
      transformCreateNote(300);
      resetInputCreate();
    };

    transformCreateNote(50);
  });

  return buttonEl;
};

function transformCreateNote(persentase) {
  return containerCreateEl.style.transform = `translate(-50%, -${persentase}%)`;
}

function resetInputCreate() {
  inputTitleEl.value = '';
  inputDescriptionEl.value = '';
}

function saveNote() {
  if (inputTitleEl.value === '' || inputDescriptionEl.value === '') {
    console.log('Masih Kosong');
  } else {
    createNoteElement(inputTitleEl.value, inputDescriptionEl.value);
    containerCreateEl.style.transform = 'translate(-50%, -300%)';
    resetInputCreate();
  }
}

createNoteEl.addEventListener('click', function () {
  transformCreateNote(50);
});

btnDoneEl.addEventListener('click', saveNote);

btnCloseEl.addEventListener('click', function () {
  transformCreateNote(300);
});
