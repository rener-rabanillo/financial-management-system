// Text boxes
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

// Error messages
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

firstName.addEventListener("input", () => {
    const regex = /^[A-Za-z ]+$/;
    firstNameError.classList.add('hidden');

    if (firstName.value === "") {
        firstNameError.textContent = "Please enter your first name.";
        firstNameError.classList.remove('hidden');
    }
    
    if (!regex.test(firstName.value)) {
        firstNameError.textContent = "Names should contain letters only.";
        firstNameError.classList.remove('hidden');
    }
});

lastName.addEventListener("input", () => {
    const regex = /^[A-Za-z ]+$/;
    lastNameError.classList.add('hidden');

    if (lastName.value === "") {
        lastNameError.textContent = "Please enter your last name.";
        lastNameError.classList.remove('hidden');
    }
    
    if (!regex.test(lastName.value)) {
        lastNameError.textContent = "Names should contain letters only.";
        lastNameError.classList.remove('hidden');
    }
});

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

confirmPassword.addEventListener("input", () => {
    confirmPasswordError.classList.add('hidden');
    
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.classList.remove('hidden');
    }
});

function validateForm() {
    let valid = true;

    if (firstName.value === "") { valid = false; firstNameError.classList.remove('hidden'); }
    if (lastName.value === "") { valid = false; lastNameError.classList.remove('hidden'); }
    if (email.value === "") { valid = false; emailError.classList.remove('hidden'); }
    if (password.value === "") { valid = false; passwordError.classList.remove('hidden'); }
    if (confirmPassword.value !== password.value) {
        valid = false;
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.classList.remove('hidden');
    }

    return valid;
}