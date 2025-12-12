
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupConfirmPassword = document.getElementById("signupConfirmPassword");

// Error messages
const firstNameErr = document.getElementById("firstNameErr");
const lastNameErr = document.getElementById("lastNameErr");
const signupEmailErr = document.getElementById("signupEmailErr");
const signupPasswordErr = document.getElementById("signupPasswordErr");
const signupConfirmPasswordErr = document.getElementById("signupConfirmPasswordErr");

firstName.addEventListener('input', () => {
    const regex = /^[A-Za-z ]+$/;
    firstNameErr.classList.add('hidden');

    if (firstName.value === "") {
        firstNameErr.textContent = "Please enter your first name.";
        firstNameErr.classList.remove('hidden');
    } else if (!regex.test(firstName.value)) {
        firstNameErr.textContent = "Names should contain letters only.";
        firstNameErr.classList.remove('hidden');
    }
});

lastName.addEventListener('input', () => {
    const regex = /^[A-Za-z ]+$/;
    lastNameErr.classList.add('hidden');

    if (lastName.value === "") {
        lastNameErr.textContent = "Please enter your last name.";
        lastNameErr.classList.remove('hidden');
    } else if (!regex.test(lastName.value)) {
        lastNameErr.textContent = "Names should contain letters only.";
        lastNameErr.classList.remove('hidden');
    }
});


signupEmail.addEventListener('input', () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    signupEmailErr.classList.add('hidden');

    if (signupEmail.value === "") {
        signupEmailErr.textContent = "Please enter your email address.";
        signupEmailErr.classList.remove('hidden');
    } else if (!regex.test(signupEmail.value)) {
        signupEmailErr.textContent = "Please enter a valid email address.";
        signupEmailErr.classList.remove('hidden');
    }
});

signupPassword.addEventListener('input', () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    signupPasswordErr.classList.add('hidden');

    if (!regex.test(signupPassword.value)) {
        signupPasswordErr.textContent = "Password must have 8+ chars, upper, lower, number & symbol.";
        signupPasswordErr.classList.remove('hidden');
    }
});


signupConfirmPassword.addEventListener('input', () => {
    signupConfirmPasswordErr.classList.add('hidden');

    if (signupConfirmPassword.value !== signupPassword.value) {
        signupConfirmPasswordErr.textContent = "Passwords do not match.";
        signupConfirmPasswordErr.classList.remove('hidden');
    }
});

function validateForm() {
    let valid = true;

    if (firstName.value === "") { valid = false; firstNameErr.classList.remove('hidden'); }
    if (lastName.value === "") { valid = false; lastNameErr.classList.remove('hidden'); }
    if (signupEmail.value === "") { valid = false; signupEmailErr.classList.remove('hidden'); }
    if (signupPassword.value === "") { valid = false; signupPasswordErr.classList.remove('hidden'); }
    if (signupConfirmPassword.value !== signupPassword.value) {
        valid = false;
        signupConfirmPasswordErr.textContent = "Passwords do not match.";
        signupConfirmPasswordErr.classList.remove('hidden');
    }

    return valid;
}
