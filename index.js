
let username = document.querySelector(".username");
let email = document.querySelector(".Email");
let password = document.querySelector(".password");


document.getElementById("signup").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Perform authentication
    if (username.value === "rehan" && email.value === "rehantechnos@gmail.com" && password.value === "rehan123") {
        window.location.assign("home/home.html");
    } else {
        alert("Invalid username, email, or password");
    }
});


