const setBudgetButtons = document.getElementsByClassName('setBudgetButton');
const setBudgetForm = document.getElementById('setBudgetForm');
const cancel = document.getElementById('cancel');

for (let i = 0; i < setBudgetButtons.length; i++) {
    setBudgetButtons[i].addEventListener('click', () => {
        setBudgetForm.style.display = 'block';
    });
}

cancel.addEventListener('click', () => {
    setBudgetForm.style.display = 'none';
});