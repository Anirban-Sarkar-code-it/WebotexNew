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
