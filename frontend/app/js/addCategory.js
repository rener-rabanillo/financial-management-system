const addCategoryButtons = document.getElementsByClassName('addCategoryButton');
const categoryForm = document.getElementById('addCategoryForm');
const cancelBtn = document.getElementById('cancelBtn');

for (let i = 0; i < addCategoryButtons.length; i++) {
    addCategoryButtons[i].addEventListener('click', () => {
        categoryForm.style.display = 'block';
    });
}

cancelBtn.addEventListener('click', () => {
    categoryForm.style.display = 'none';
});