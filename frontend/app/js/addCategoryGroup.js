const addCategoryGroupButton = document.getElementById('addCategoryGroupButton');
const form = document.getElementById('addCategoryGroupForm');
const cancelButton = document.getElementById('cancelButton');

addCategoryGroupButton.addEventListener('click', () => {
    form.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    form.style.display = 'none';
});