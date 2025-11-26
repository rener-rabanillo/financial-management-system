// Login form
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

// Signup form
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
const signupConfirmPasswordErr = document.getElementById("signupConfirmPassword");

firstName.addEventListener('input', () => {
    firstNameErr.textContent = "";

    const regex = new RegExp("^[A-Za-z ]+$");

    if (firstName.value === "") {
        firstNameErr.textContent = "Please enter your first name.";
        firstNameErr.classList.remove('hidden');
        return;
    }

    if (!regex.test(firstName.value)) {
        firstNameErr.textContent = "Names should contain letters only.";
        firstNameErr.classList.remove('hidden');
        return;
    }

    firstNameErr.textContent = "";
    firstNameErr.classList.add('hidden');
});

lastName.addEventListener('input', () => {
    lastNameErr.textContent = "";

    const regex = new RegExp("^[A-Za-z ]+$");

    if (lastName.value === "") {
        lastNameErr.textContent = "Please enter your last name.";
        lastNameErr.classList.remove('hidden');
        return;
    }

    if (!regex.test(lastName.value)) {
        lastNameErr.textContent = "Names should contain letters only.";
        lastNameErr.classList.remove('hidden');
        return;
    }

    lastNameErr.textContent = "";
    lastNameErr.classList.add('hidden');
});

signupEmail.addEventListener('input', () => {
    signupEmailErr.textContent = "";

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (signupEmail.value === "") {
        signupEmailErr.textContent = "Please enter your address.";
        signupEmailErr.classList.remove('hidden');
    }

    if (regex.test(signupEmail.value)) {
        signupEmailErr.textContent = "Please enter a valid email address.";
        signupEmailErr.classList.remove('hidden');
    }
});

signupPassword.addEventListener('input', () => {
    signupPasswordErr.textContent = "";

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(signupPasswordErr.value)) {
        signupPasswordErr.textContent = "Please enter a valid password.";
        signupPasswordErr.classList.remove('hidden');
    }
});

signupConfirmPassword.addEventListener('input', () => {
    signupConfirmPasswordErr.textContent = "";
});

function validateForm() {
    signupConfirmPasswordErr.textContent = "";

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        return false;
    }
}