const checkButton = document.getElementById('checkButton');
const inputText = document.getElementById('inputText');
const resultParagraph = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const text = inputText.value.trim();

  if (text) {
    // Simulated plagiarism detection (replace with actual logic)
    const plagiarismDetected = checkForPlagiarism(text);
    displayResult(plagiarismDetected);
  }
});

function checkForPlagiarism(text) {
  // Simulated plagiarism detection logic
  return text.includes('copy');
}

function displayResult(plagiarismDetected) {
  if (plagiarismDetected) {
    resultParagraph.textContent = 'Plagiarism Detected!';
    resultParagraph.style.color = 'red';
  } else {
    resultParagraph.textContent = 'No Plagiarism Detected';
    resultParagraph.style.color = 'green';
  }
}
