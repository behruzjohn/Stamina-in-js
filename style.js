let texts = [
  'What you do today can improve all your tomorow',
  'Dont watch the clock; do what it does.Keep going',
];

let firstGap = texts[0];
let secondGap = texts[1];
let currentGap = firstGap;
let startTime = null;

const h1 = document.getElementById('h1');
const inputElement = document.getElementById('input');
const resultElement = document.getElementById('result');

function renderText(text, className) {
  h1.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    h1.innerHTML += `<span class="${className}">${text[i]}</span>`;
  }
}

renderText(currentGap, 'span1');

function input(inputBox) {
  if (!startTime) {
    startTime = Date.now();
  }

  const userInput = inputBox.value;
  const spans = [
    ...document.getElementsByClassName(
      currentGap === firstGap ? 'span1' : 'span2'
    ),
  ];

  for (let i = 0; i < spans.length; i++) {
    if (userInput[i] == null) {
      spans[i].style.color = 'black';
    } else if (userInput[i] === currentGap[i]) {
      spans[i].style.color = 'green';
    } else {
      spans[i].style.color = 'red';
    }
  }

  if (userInput === currentGap) {
    if (currentGap === firstGap) {
      currentGap = secondGap;
      inputBox.value = '';
      renderText(currentGap, 'span2');
    } else {
      finish();
    }
  }
}

function finish() {
  const endTime = Date.now();
  const duration = Math.round((endTime - startTime) / 1000);
  resultElement.textContent = `✅ Finished in ${duration} seconds`;
  h1.innerHTML = '<strong>🎉 All done!</strong>';
}
