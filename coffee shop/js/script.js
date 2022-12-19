// Get all the links in the nav element
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the section that the link refers to
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    // Scroll to the section
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
