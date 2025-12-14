const addTransactionButton = document.getElementById('addTransactionButton');
const form = document.getElementById('addTransactionForm');
const cancelButton = document.getElementById('cancelButton');

addTransactionButton.addEventListener('click', () => {
    form.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    form.style.display = 'none';
});