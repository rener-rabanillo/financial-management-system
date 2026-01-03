const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

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