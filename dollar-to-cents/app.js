const inputEl = document.getElementById('dollar');
const quartersEl = document.getElementById('quarters');
const dimesEl = document.getElementById('dimes');
const nickelEl = document.getElementById('nickel');
const penniesEl = document.getElementById('pennies');
const resultEl = document.getElementById('result');
const errorEl = document.querySelector('.error');
let quarters = 0, dimes = 0, nickel = 0, pennies = 0, result = 0;


function calculate(value) {
  if (Number.isFinite(value) || value <= -1) {
    errorEl.innerText = 'Value Is Wrong';
    inputEl.style.borderColor = '#FF4848';
  } else {
    quarters = Math.floor(parseFloat(value * 4));
    dimes = Math.floor(parseFloat(value * 10));
    nickel = Math.floor(parseFloat(value * 20));
    pennies = Math.floor(parseFloat(value * 100));
    result = quarters + dimes + nickel + pennies;

    errorEl.innerText = '';
    inputEl.style.borderColor = 'var(--primary-color)';
  }
}

function showCents() {
  calculate(inputEl.value);

  quartersEl.innerHTML = quarters;
  dimesEl.innerHTML = dimes;
  nickelEl.innerHTML = nickel;
  penniesEl.innerHTML = pennies;
  resultEl.innerHTML = result;
}

inputEl.addEventListener('input', showCents);