// Get the navbar
var navbar = document.getElementById("navbar");

// Get the buttons inside the navbar
var buttons = navbar.getElementsByClassName("nav-button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
