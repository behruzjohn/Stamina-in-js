let texts = [
  'What you do today can improve all your tomorow',
  'Dont watch the clock; do what it does.Keep going',
];
let firstGap = texts[0];
let secondGap = texts[1];
let textsWord = firstGap.split('');
const h1 = document.getElementById('h1');
for (let i = 0; i < firstGap.length; i++) {
  h1.innerHTML += `<span class='span'>${firstGap[i]}</span>`;
}
const spanVal = [...document.getElementsByClassName('span')];

let startTime;

function input(input) {
  let allCorrect = false;
  if (!startTime) {
    startTime = Date.now();
  }

  if (firstGap === input.value) {
    finish();
  } else {
    for (let i = 0; i < spanVal.length; i++) {
      const element = spanVal[i];
      if (element.innerText === input.value[i]) {
        element.style.color = 'green';
      } else {
        element.style.color = 'red';
      }
    }
  }
  if (input.value === firstGap) {
    h1.innerHTML = '';
    input.value = '';

    for (let i = 0; i < secondGap.length; i++) {
      h1.innerHTML += `<span class='span'>${secondGap[i]}</span>`;
      console.log(secondGap[i]);
    }
  }
  if (secondGap === input.value) {
    for (let i = 0; i < spanVal.length; i++) {
      const element = spanVal[i];
      if (element.innerText === input.value[i]) {
        element.style.color = 'green';
      } else {
        element.style.color = 'red';
      }
    }
  }
}

function finish() {
  // console.log('hehehh');

  const endTime = Date.now();
  const result = Math.round((endTime - startTime) / 1000);

  const resultElement = document.getElementById('result');
  resultElement.textContent = result;
}
