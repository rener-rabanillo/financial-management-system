"use strict";

//
// Category Group Form Modal
//

const addCategoryGroupButton = document.getElementById("fab-add-category-group");
const newCategoryGroupFormModal = document.getElementById("new-category-group-form-modal");
const newCategoryGroupForm = document.getElementById("new-category-group-form");
const newCategoryGroupFormCancel = document.getElementById("new-category-group-form-cancel");

addCategoryGroupButton.addEventListener("click", () => {
    newCategoryGroupFormModal.classList.toggle("new-category-group-form-modal-show");
});

newCategoryGroupFormCancel.addEventListener("click", () => {
    newCategoryGroupFormModal.classList.toggle("new-category-group-form-modal-show");
    newCategoryGroupForm.reset();
});

//
// Income Category Form Modal
//

const addIncomeCategoryButtons = document.getElementsByClassName("add-income-category");
const newIncomeCategoryFormModal = document.getElementById("new-income-category-form-modal");
const newIncomeCategoryForm = document.getElementById("new-income-category-form");
const newIncomeCategoryFormCancel = document.getElementById("new-income-category-form-cancel");

for (let i = 0; i < addIncomeCategoryButtons.length; i++) {
    addIncomeCategoryButtons[i].addEventListener("click", () => {
        newIncomeCategoryFormModal.classList.toggle("new-income-category-form-modal-show");
    });
}

newIncomeCategoryFormCancel.addEventListener("click", () => {
    newIncomeCategoryFormModal.classList.toggle("new-income-category-form-modal-show");
    newIncomeCategoryForm.reset();
});

//
// Expense Category Form Modal
//

const addExpenseCategoryButtons = document.getElementsByClassName("add-expense-category");
const newExpenseCategoryFormModal = document.getElementById("new-expense-category-form-modal");
const newExpenseCategoryForm = document.getElementById("new-expense-category-form");
const newExpenseCategoryFormCancel = document.getElementById("new-expense-category-form-cancel");

for (let i = 0; i < addExpenseCategoryButtons.length; i++) {
    addExpenseCategoryButtons[i].addEventListener("click", () => {
        newExpenseCategoryFormModal.classList.toggle("new-expense-category-form-modal-show");
    });
}

newExpenseCategoryFormCancel.addEventListener("click", () => {
    newExpenseCategoryFormModal.classList.toggle("new-expense-category-form-modal-show");
    newExpenseCategoryForm.reset();
});