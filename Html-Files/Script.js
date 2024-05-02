/* JavaScript code */
// This code handles the functionality of the navigation menu and running text animation.

// Navigation menu toggle
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

// Close menu on scroll
window.onscroll = () => {
menu.classList.remove('fa-times');
navbar.classList.remove('active');
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const submitMsg = document.getElementById("submit-msg");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        submitMsg.textContent = "Please fill in all details.";
      } else {
        submitMsg.textContent = "Submitting...";
        // Simulate form submission
        setTimeout(() => {
          submitMsg.textContent = "Submission successful!";
          form.reset();
        }, 2000); // Change 2000 to your desired delay
      }
    });
  });
  