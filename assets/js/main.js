/* Iinitializing the Bootstrap Tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
/* Form Submit Call to Action */
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  if (username.value == "" || password.value == "" || email.value == "" || subject.value == "" || message.value == "") {
    alert("Ensure you input some values in the boxes!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    username.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  }
});

/* Form Validation */
function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Personal Check: Name cannot be empty.";
        return false;
    }
    var lastName = document.getElementById('lastName').value;
    if (lastName == "") {
        document.querySelector('.status').innerHTML = "Personal Check: Last name cannot be empty."
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Personal Check: Email cannot be empty.";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Personal Check: Email format invalid.";
            return false;
        }
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Personal Check: Message cannot be empty.";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
    alert("The Form has been submitted Succesfuly.");
}
/* TypeWriter */
var typewriterElement = document.getElementById("myName");
var text = "Jonathan D. Greenberg";
var typingDelay = 200; // delay of Chars in ms

let charIndex = 0;

function typeWriter() {
  if (charIndex < text.length) {
    typewriterElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingDelay);
  }
}
window.addEventListener("load", typeWriter); // Calling the action when the page is loading