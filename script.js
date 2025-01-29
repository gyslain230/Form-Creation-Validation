document.addEventListener('DOMContentLoaded', function() {
    // Your script here
    console.log('The DOM is fully loaded.');
    // Any other code you want to execute
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit",function(event) {
        event.preventDefault();
        const username = document.getElementById("username").Value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        let isValid = true;
        var messages= [];
        if (username.length < 3) {
            isValid = false;
            messages.push("please enter a valid username not less than 3 letters and try again");
            
        }
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("The email must contain both '@' and '.' characters.");
        }
        if (password.length < 8) {
            isValid = false;
            messages.push("please enter a valid password not less than 8 characters  and try again");
            
        }
        //displaying feeedback

        feedbackDiv.style.display = "block";
        if (isValid==true) {
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "28a745";

            
        }
        if (isValid== false) {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }

    });


});
