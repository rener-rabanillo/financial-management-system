// Text boxes
const email = document.getElementById("email");
const password = document.getElementById("password");

// Error messages
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

email.addEventListener("input", () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    emailError.classList.add('hidden');

    if (email.value === "") {
        emailError.textContent = "Please enter your email address.";
        emailError.classList.remove('hidden');
    }
    
    if (!regex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.remove('hidden');
    }
});

password.addEventListener("input", () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    passwordError.classList.add('hidden');

    if (!regex.test(password.value)) {
        passwordError.textContent = "Password must have 8+ chars, upper, lower, number & symbol.";
        passwordError.classList.remove('hidden');
    }
});