/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Global variables to use in functions
//const navBar = document.querySelector('navbar__menu'); // Select nav bar using class name


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// Function to build the navigation bar

function buildNav() {
  const navBar = document.querySelector('.navbar__menu'); // create Navbar
  const sections = document.querySelectorAll('section'); // Collect sections

  sections.forEach((section, index) => { // Iterate through sections
    const link = document.createElement('a'); // Create link(anchor)
    link.textContent = `Section ${index + 1}`; // Create label using text Content
    link.href = `#${section.id}`; // Link using href

    const listItem = document.createElement('li'); // Create list item
    listItem.appendChild(link);
    navBar.appendChild(listItem); // Append list item to Navbar
  });

  // Add a click event listener to each anchor in navbar
  const navBarLinks = document.querySelectorAll('.navbar__menu a');

  navBarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(link.getAttribute('href'));
      const yOffset = -60;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Highlight the clicked navbar link
      setActiveNav(link);
    });
  });
}

// Create a separate function to highlight clicked link
function setActiveNav(clickedLink) {
  const navBarLinks = document.querySelectorAll('.navbar__menu a'); // collect links from nav menu that have anchor element

  navBarLinks.forEach((link) => {
    link.classList.remove('active');
  });

  clickedLink.classList.add('active'); // Sets argument as active to highlight
}

function setActive() {
  const navBar = document.querySelector('.navbar__menu');
    const sections = document.querySelectorAll('section');
  
    const activeSession = (entries) => { // Create active session variable to add to Observer
      entries.forEach((entry) => {
        const sectionId = entry.target.getAttribute('id');
        const link = navBar.querySelector(`[href="#${sectionId}"]`);
  
        if (entry.isIntersecting) {
          link.classList.add('your-active-class'); // Adds active class to section if interesecting
          entry.target.classList.add('active-section');
        } else {
          link.classList.remove('your-active-class'); // Removes active class from section if intersecting
          entry.target.classList.remove('active-section');
        }
      });
    };
  
    const observer = new IntersectionObserver(activeSession, { // create observer for monitoring
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });
  
    sections.forEach((section) => observer.observe(section));
  };
  

document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  setActive();
});


