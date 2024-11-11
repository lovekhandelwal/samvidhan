// Select the chatbot button and container
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.getElementById('chatbot-container');

// Toggle the chatbot container on button click
chatbotButton.addEventListener('click', () => {
  if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
    chatbotContainer.style.display = 'block';
  } else {
    chatbotContainer.style.display = 'none';
  }
});
