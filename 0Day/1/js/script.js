// Add custom JavaScript here

const runTypingEffect = () => {
  const text = 'I am Usman Ali Khan';
  const typeElement = document.getElementById('typing text');
  const typingDelay = 100;

  typeText(text, typeElement, typingDelay);
};

const typeText = (text, typeElement, delay) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typeElement.textContent += text.charAt(i);
    }, delay * i);
  }
};

document.addEventListener('DOMContentLoaded', runTypingEffect);
