const inputValueOne = document.getElementById('colorOne');
const inputValueTwo = document.getElementById('colorTwo');
const inputValueThree = document.getElementById('colorThree');
const resultEl = document.getElementById('result');
const colorResultEl = document.getElementById('colorResult');
const buttonStartEl = document.querySelector('.btn-start');
const buttonFillEl = document.querySelector('.btn-fill');
const buttonStopEl = document.querySelector('.btn-stop');
const body = document.body;

let arrColor = [];
let intervalColor;

function stringSplit(value) {
  // No refactor

  // let splitStr = value.split('');
  // splitStr.shift();
  // let arr = [];
  // for (let i = 0; i < splitStr.length; i++) {
  //   if (i >= 1 && i <= 2) {
  //     arr.push(splitStr[i]);
  //   }
  // }
  // return arr.join('');

  // Refactor
  return value.split('').slice(1).filter((e, i) => i < 2).join('');
}

function showDigitsColor() {
  const inputDigitsOne = stringSplit(inputValueOne.value);
  const inputDigitsTwo = stringSplit(inputValueTwo.value);
  const inputDigitsThree = stringSplit(inputValueThree.value);

  function additionDigitsColor() {
    return `#${inputDigitsOne}${inputDigitsTwo}${inputDigitsThree}`;
  }
  resultEl.innerText = additionDigitsColor();
  colorResultEl.value = additionDigitsColor();

  arrColor.push(resultEl.textContent);
}

function startAnimationColor() {
  intervalColor = setInterval(changingColor, 800)
  resultEl.innerText = '';
}

function changingColor() {
  let random;

  if (arrColor.length < 3) {
    resultEl.innerText = 'Cannot Change Color.';
  } else {
    for (let i = 0; i < arrColor.length; i++) {
      random = Math.floor(Math.random() * arrColor.length);
    }
    body.style.background = arrColor[random];
  }
}

function stopAnimationColor() {
  clearInterval(intervalColor);
}


buttonStartEl.addEventListener('click', startAnimationColor);
buttonFillEl.addEventListener('click', showDigitsColor);
buttonStopEl.addEventListener('click', stopAnimationColor);