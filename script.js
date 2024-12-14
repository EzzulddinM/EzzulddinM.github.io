const textDisplay = document.getElementById('text-display');
const inputText = document.getElementById('input-text');
const status = document.getElementById('status');

// List of words to use for random word generation
const words = [
  'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
  'mango', 'nectarine', 'orange', 'pear', 'plum', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon'
];

// Function to generate a random string of words
function generateRandomWords() {
  const randomWordsCount = 5;  // Number of words to display
  let randomText = '';
  
  for (let i = 0; i < randomWordsCount; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    randomText += randomWord + ' ';
  }
  
  return randomText.trim();
}

// Display random words
textDisplay.textContent = generateRandomWords();

inputText.addEventListener('input', () => {
  const currentText = textDisplay.textContent;
  const userInput = inputText.value;

  // Check if input matches the displayed text
  if (userInput === currentText) {
    status.textContent = 'Correct! Great job!';
    status.style.color = 'green';
  } else if (currentText.startsWith(userInput)) {
    status.textContent = 'Keep typing...';
    status.style.color = 'black';
  } else {
    status.textContent = 'Oops! Try again!';
    status.style.color = 'red';
  }
});
