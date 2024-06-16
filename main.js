document.addEventListener("DOMContentLoaded", () => {
    // Navigation menu item activation
    const menuItems = document.querySelectorAll('.navbar__menu__item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(el => el.classList.remove('active'));
            this.classList.add('active');

            // Scroll to the corresponding section
            const sectionId = this.textContent.toLowerCase();
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth scrolling for Hire Me button
    const hireMeButton = document.querySelector('.home__contact');
    hireMeButton.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Highlighting the active section in the navigation menu on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        menuItems.forEach(li => {
            li.classList.remove('active');
            if (li.textContent.toLowerCase() === current) {
                li.classList.add('active');
            }
        });
    });

    // Basic contact form validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Regex for basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission (for example purposes)
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
});
