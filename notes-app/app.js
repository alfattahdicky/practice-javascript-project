const createNoteEl = document.querySelector('.wrap-addNote');
const containerCreateEl = document.querySelector('.container-create')
const containerEl = document.getElementById('container')
const btnSaveEl = document.getElementById('btnSave')
const inputTitleEl = document.getElementById('inputTitle');
const inputDescriptionEl = document.getElementById('inputDescription');

function createNoteElement(title, description) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  const settingEl = document.createElement('div');
  settingEl.classList.add('setting');
  settingEl.appendChild(createDeleteButton());

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
}

createNoteEl.addEventListener('click', function () {
  containerCreateEl.style.transform = 'translate(-50%, -50%)';
});


btnSaveEl.addEventListener('click', function () {
  if (inputTitleEl.value === '' || inputDescriptionEl.value === '') {
    console.log('Masih Kosong');
  } else {
    createNoteElement(inputTitleEl.value, inputDescriptionEl.value);
    containerCreateEl.style.transform = 'translate(-50%, -300%)';
    inputTitleEl.value = '';
    inputDescriptionEl.value = '';
  }
});

