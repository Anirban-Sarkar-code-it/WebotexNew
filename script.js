document.addEventListener("DOMContentLoaded", function() {
    const ctaButton = document.querySelector('.cta');
    
    ctaButton.addEventListener('mouseenter', function() {
        ctaButton.style.transform = 'scale(1.1)';
    });

    ctaButton.addEventListener('mouseleave', function() {
        ctaButton.style.transform = 'scale(1)';
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
