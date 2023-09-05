// Retrieve your variables
var userName = localStorage.getItem("userName");
var email = localStorage.getItem("email"); // Assuming this is your email variable
// ...

// Set the content of the username option
document.getElementById("usernameOption").innerHTML = `👤 ${userName}`;

// Set the content of the email option
document.querySelector('option[value="email"]').textContent = email;
