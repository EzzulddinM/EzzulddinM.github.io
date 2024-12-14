// Get elements
const textDisplay = document.getElementById('text-display');
const inputText = document.getElementById('input-text');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');

// List of computer science-related words
const words = [
  'algorithm', 'binary', 'cache', 'debug', 'encryption', 'firewall', 'gateway', 'hash', 'iteration', 'kernel',
  'loop', 'middleware', 'network', 'overflow', 'protocol', 'query', 'recursion', 'syntax', 'thread', 'virtualization'
];

// Generate random words
function generateRandomWords() {
  const wordCount = 5;
  let randomText = '';

  for (let i = 0; i < wordCount; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    randomText += randomWord + ' ';
  }

  return randomText.trim();
}

// Display the random text
function initializePractice() {
  textDisplay.textContent = generateRandomWords();
  inputText.value = '';
  feedback.textContent = '';
}

// Check the user's input
function checkInput() {
  const originalText = textDisplay.textContent.split(' ');
  const userInput = inputText.value.trim().split(' ');

  // Clear feedback
  feedback.textContent = '';

  // Check each word and highlight incorrect ones
  let isCorrect = true;
  const highlightedText = originalText.map((word, index) => {
    if (userInput[index] === word) {
      return `<span class='correct'>${word}</span>`;
    } else {
      isCorrect = false;
      return `<span class='incorrect'>${word}</span>`;
    }
  }).join(' ');

  // Display results
  textDisplay.innerHTML = highlightedText;
  feedback.textContent = isCorrect ? '100% Correct!' : 'Keep practicing!';
  feedback.className = isCorrect ? 'correct' : 'incorrect';

  if (isCorrect) {
    initializePractice(); // Reset for new practice
  }
}

// Initialize the practice on load
initializePractice();

// Add event listener to the button
submitButton.addEventListener('click', checkInput);
