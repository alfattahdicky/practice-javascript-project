const containerCalculator = document.getElementById("calculator");
const oneOperand = document.getElementById('oneOperand');
const twoOperand = document.getElementById('twoOperand');
const viewEl = document.getElementById('result');
const operatorCalculator = document.querySelectorAll(".op");
const numberCalculator = document.querySelectorAll(".num");
const deleteNumber = document.getElementById("clear");
const allDeleteNumber = document.getElementById("allClear");
const resultCalculator = document.querySelector(".result");
const operatorPersen = document.querySelector('.op-persen');
const operatorComa = document.querySelector('.coma');

const calculator = {
  previousOperand: '',
  currentOperand: '',
  operation: '',
  result: '',
  decimal: ''
}

/**
 * 
 * @param {inputNumber} number
 * inisialisasi currentOperand contain number  
 */

const inputNumber = (number) => {
  if(calculator.currentOperand === '0') {
    calculator.currentOperand = number;
  }else {
    calculator.currentOperand += number; 
  }
}

/**
 * function calculator with event click and loop number for display contain currentOperand
 */

numberCalculator.forEach(number => {
  number.addEventListener('click', e => {
    const value = e.target.value;
    inputNumber(value);
    viewEl.textContent = calculator.currentOperand;

    console.log(calculator)
  });
});

/**
 * function operator with event click and loop operator for display operator 
 */

operatorCalculator.forEach(operator => {
  operator.addEventListener('click', event => {
    const operation = event.target.value;
    calculator.operation = operation;
    // check calculator operation not empty
    if(calculator.operation != '' && (calculator.operation).length == 1) {
      calculator.previousOperand = calculator.currentOperand;
      calculator.currentOperand = ''; 

      viewEl.textContent += calculator.operation;
    }

  });
});

/**
 * operator persen with event click
 */

operatorPersen.addEventListener('click', (e) =>  {
  // check currentOperand not empty and current operand initial with self value divided 100 
  // show it
  if(calculator.currentOperand !== '') {
    calculator.currentOperand = String((calculator.currentOperand / 100).toFixed(2));

    // console.log(calculator);

    viewEl.textContent = calculator.currentOperand;
  }
});

operatorComa.addEventListener('click', () => {
  // check currentOperand not empty and assign (.) to currentOperand to show it
  if(calculator.currentOperand != '') {
    calculator.currentOperand += '.';
    
    viewEl.textContent = calculator.currentOperand;
  }
});

resultCalculator.addEventListener('click', () => {
  // calculate value previousOperand and value currenOperand and assign to result 
  switch(calculator.operation) {
    case '+':
      calculator.result = 
      parseFloat(calculator.previousOperand) + parseFloat(calculator.currentOperand);
      break;
    case '-':
      calculator.result = 
      parseFloat(calculator.previousOperand) - parseFloat(calculator.currentOperand);
      break;
    case 'x':
      calculator.result = 
      parseFloat(calculator.previousOperand) * parseFloat(calculator.currentOperand);
      break;
    case '/':
      // solution for currentOperand have value 0 and cannot calculate because infinity
      if(calculator.currentOperand !== '0') {
        calculator.result = 
        parseFloat(calculator.previousOperand) / parseFloat(calculator.currentOperand);
      }
      calculator.result = '';
      break;
  }

  let resultConvertString = calculator.result;

  // check decimal number and set fixed decimal 2
  if(!Number.isInteger(resultConvertString) && resultConvertString != '') {
    calculator.result = calculator.result.toFixed(2);
    resultConvertString = resultConvertString.toFixed(2);
  }
  
  // value result assign to currentOperand and operation & previousOperand empty
  calculator.currentOperand = String(resultConvertString);
  calculator.previousOperand = '';
  calculator.operation = '';

  // console.log(calculator)

  viewEl.textContent = String(resultConvertString);
});

allDeleteNumber.addEventListener('click', () => {

  // clear data object and empty display
  calculator.operation = '';
  calculator.currentOperand = '0';
  calculator.result = '';
  calculator.previousOperand = '';
  viewEl.textContent = '';

  // console.log(calculator);
});

deleteNumber.addEventListener('click', () => { 
  // check text viewEl except operation calculator
  if(isNaN(viewEl.textContent)) {
    // works because viewEl have content from object calculator
    viewEl.textContent = deleteItem(viewEl.textContent)
    // delete operation
    deleteItem(calculator.operation);
    if(calculator.operation === '') {
      calculator.currentOperand = calculator.previousOperand;
      calculator.previousOperand = '';
    }

  }else {
    viewEl.textContent = deleteItem(viewEl.textContent)
  }
});

/**
 * 
 * @param {number} item 
 * @returns string
 * delete item one by one and match to data object 
 */
const deleteItem = (item) => {
  const arr = item.split('');
  const deleteItemOneByOne = arr.slice(0, arr.length - 1).join('');

  switch(item) {
    case calculator.currentOperand:
      calculator.currentOperand = deleteItemOneByOne;
      break;
    case calculator.previousOperand:
      calculator.previousOperand = deleteItemOneByOne;
      break;
    case calculator.operation:
      calculator.operation = deleteItemOneByOne;
      break;
  }

  // console.log(calculator);
  

  return deleteItemOneByOne;
}








