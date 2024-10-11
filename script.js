document.addEventListener("DOMContentLoaded", function() {
    // Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Function to validate the form inputs
    function validateForm(username, email, password) {
        let isValid = true;
        let messages = [];

        // Username validation: should be at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: must include both '@' and '.' characters
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation: should be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        return { isValid, messages };
    }

    // Add an event listener to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form submission

        // Retrieve and trim the values from input fields
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Call the validation function
        const { isValid, messages } = validateForm(username, email, password);

        // Display feedback
        feedbackDiv.style.display = "block";  // Show the feedback div
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";  // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";  // Red for errors
        }
    });
});
