// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Contact Form Validation =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting

    // Grab form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Simple email regex validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      return;
    }

    // Success message
    alert("Thank you for your message, " + name + "! I'll get back to you soon.");
    contactForm.reset();
  });
}
