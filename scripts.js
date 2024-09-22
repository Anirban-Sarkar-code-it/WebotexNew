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

    // Form submission handling
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for validation

        const orgName = document.getElementById('orgName').value;
        const contactPerson = document.getElementById('contactPerson').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const servicesNeeded = document.getElementById('servicesNeeded').value;

        alert(`Thank you ${contactPerson} from ${orgName} for your application!`);

        // Here you would typically send the data to a server...
    });
});
document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    const orgName = document.getElementById('orgName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const servicesNeeded = document.getElementById('servicesNeeded').value;

    // Prepare data to be saved in Excel
    const data = [
        ["Organization Name", "Contact Person", "Email", "Phone", "Services Needed"], // Headers
        [orgName, contactPerson, email, phone, servicesNeeded] // Row of data
    ];

    // Create a new workbook and add the data
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Applications");

    // Generate the Excel file
    XLSX.writeFile(wb, 'client-applications.xlsx');

    // Reset the form
    document.getElementById('clientForm').reset();
    alert('Application submitted successfully and Excel file generated!');
});
function(){
      emailjs.init("Anirban Sarkar"); // Your User ID
   }
    document.getElementById('clientForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collecting form data
        const formData = {
            orgName: document.getElementById('orgName').value,
            contactPerson: document.getElementById('contactPerson').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            servicesNeeded: document.getElementById('servicesNeeded').value,
            additionalInfo: document.getElementById('additionalInfo').value,
            projectTimeline: document.getElementById('projectTimeline').value,
            budget: document.getElementById('budget').value
        };

        // Send data to the admin via EmailJS
        emailjs.send("service_qey5nf4", "template_tebxp98", formData)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Application submitted successfully!');
            }, function(error) {
                console.log('Failed to send email. Error:', error);
                alert('Failed to send application. Please try again later.');
            });

        // Reset the form after submission
        document.getElementById('clientForm').reset();
    });
