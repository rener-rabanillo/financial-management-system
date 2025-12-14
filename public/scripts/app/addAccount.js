const addAccountButton = document.getElementById('addAccountButton');
const form = document.getElementById('addAccountForm');
const cancelButton = document.getElementById('cancelButton');

addAccountButton.addEventListener('click', () => {
    form.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    form.style.display = 'none';
});