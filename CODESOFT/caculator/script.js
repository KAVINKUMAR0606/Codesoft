const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const modeToggle = document.querySelector('.mode-toggle');

let currentInput = '';
let memory = 0;

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeToggle.textContent = document.body.classList.contains('dark') ? "☀️ Light" : "🌙 Dark";
});


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      currentInput = '';
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else if (value === '%') {
      currentInput = (parseFloat(currentInput) / 100).toString();
    } else if (value === 'x²') {
      currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    } else if (value === '√') {
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    } else if (value === 'M+') {
      memory += parseFloat(currentInput) || 0;
    } else if (value === 'M-') {
      memory -= parseFloat(currentInput) || 0;
    } else if (value === 'MC') {
      memory = 0;
    } else if (value === 'MR') {
      currentInput = memory.toString();
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    currentInput += key;
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key === 'Escape') {
    currentInput = '';
  }

  display.value = currentInput;
});
