document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector('.cta');
    
    ctaButton.addEventListener('mouseenter', function() {
        ctaButton.style.transform = 'scale(1.1)';
    });

    ctaButton.addEventListener('mouseleave', function() {
        ctaButton.style.transform = 'scale(1)';
    });
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('feedback-name').value;
    const message = document.getElementById('feedback-message').value;

    // Simulate feedback submission (you can implement actual submission logic)
    document.getElementById('feedback-message').innerText = `Thank you for your feedback, ${name}!`;
    
    // Clear the form
    this.reset();
});
// Chatbot Functionality
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'block' : 'none';
}

// Send Message to Chatbot
document.getElementById('send-button').addEventListener('click', function() {
    const userMessage = document.getElementById('user-message').value;
    if (userMessage.trim() === '') return;

    // Display user message
    displayMessage(userMessage, 'user');

    // Clear input
    document.getElementById('user-message').value = '';

    // Simulate bot response (replace with actual API call in production)
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 1000);
});

// Display messages
function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (type === 'user' ? 'user-message' : 'bot-message');
    messageDiv.innerText = message;

    document.getElementById('chatbot-messages').appendChild(messageDiv);
    document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight;
}

// Simulated bot response (placeholder logic)
function getBotResponse(userMessage) {
    // Simple response logic for demonstration purposes
    return "You said: " + userMessage; // Replace this with your logic or API call
}


    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
