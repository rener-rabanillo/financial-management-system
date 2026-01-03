const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

firstName.addEventListener("input", () => {
    const isValid = /^[A-Za-z ]+$/.test(firstName.value.trim());

    if (firstName.value === "") {
        firstNameError.textContent = "Please enter your first name.";
        firstNameError.classList.remove('hidden');
        return;
    }
    
    if (!isValid) {
        firstNameError.textContent = "Name should contain letters only.";
        firstNameError.classList.remove('hidden');
        return;
    }

    firstNameError.classList.add('hidden');
});

lastName.addEventListener("input", () => {
    const isValid = /^[A-Za-z ]+$/.test(lastName.value.trim());

    if (lastName.value === "") {
        lastNameError.textContent = "Please enter your last name.";
        lastNameError.classList.remove('hidden');
        return;
    }
    
    if (!isValid) {
        lastNameError.textContent = "Name should contain letters only.";
        lastNameError.classList.remove('hidden');
        return;
    }

    lastNameError.classList.add('hidden');
});

email.addEventListener("input", () => {
    const isValid = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/.test(email.value.trim());
    
    if (!isValid) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.remove('hidden');
        return;
    }

    emailError.classList.add('hidden');
});

password.addEventListener("input", () => {
    const hasLowercase = /[a-z]/.test(password.value);
    const hasUppercase = /[A-Z]/.test(password.value);
    const hasNumber = /[0-9]/.test(password.value);
    const hasSymbol = /[!@#$%^&*_\-+=:;"'.,<>?()[\]{}|\/\\]/.test(password.value)
    const isValidLength = password.value.length >= 8 && password.value.length <= 20;

    let missing = [];

    if (!hasLowercase) missing.push("one lowercase letter");
    if (!hasUppercase) missing.push("one uppercase letter");
    if (!hasNumber) missing.push("one number");
    if (!hasSymbol) missing.push("one special character");
    if (!isValidLength) missing.push("at least 8-20 characters");

    let errorMessage = "Password must have ";

    for (let i = 0; i < missing.length; i++) {
        if (missing.length === 1) {
            errorMessage += missing[i] + ".";
            break;
        }
        if (i === missing.length - 1) {
            errorMessage += "and " + missing[i] + ".";
            break;
        }
        errorMessage += missing[i] + ", ";
    }

    if (missing.length > 0) {
        passwordError.textContent = errorMessage;
        passwordError.classList.remove('hidden');
        return;
    }
    
    passwordError.classList.add('hidden');
});

confirmPassword.addEventListener("input", () => {
    const isMatch = confirmPassword.value === password.value;
    
    if (!isMatch) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.classList.remove('hidden');
        return;
    }

    confirmPasswordError.classList.add('hidden');
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