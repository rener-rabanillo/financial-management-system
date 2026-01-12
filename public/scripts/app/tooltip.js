"use strict";

//
//  Add Category Group
//

const addCategoryGroupButtonContainer = document.getElementById("add-category-group-container");
const addCategoryGroupButton = document.getElementById("add-category-group");

if (addCategoryGroupButton != null) {

    addCategoryGroupButton.addEventListener("mouseover", () => {
        const toolTip = document.getElementById("add-category-group-tooltip");

        if (!toolTip) {
            const message = document.createElement("span");

            message.classList.add("tool-tip");
            message.id = "add-category-group-tooltip";
            message.textContent = "Add Category Group";

            addCategoryGroupButtonContainer.appendChild(message);
            return;
        }
        
        addCategoryGroupButtonContainer.appendChild(toolTip);
    });

    addCategoryGroupButton.addEventListener("mouseleave", () => {
        const toolTip = document.getElementById("add-category-group-tooltip");
        addCategoryGroupButtonContainer.removeChild(toolTip);
    });

}

//
//  Add Category
//

const addCategoryButtons = document.getElementsByClassName("add-category");

if (addCategoryButtons != null) {
    for (let i = 0; i < addCategoryButtons.length; i++) {

        addCategoryButtons[i].addEventListener("mouseover", () => {
            const parent = addCategoryButtons[i].getBoundingClientRect();
            const toolTip = document.getElementById("add-category-tooltip");

            if (!toolTip) {
                const message = document.createElement("span");

                document.body.appendChild(message);

                message.classList.add("tool-tip");
                message.id = "add-category-tooltip";
                message.textContent = "Add Category";
                message.style.position = "fixed";
                message.style.top = `${parent.top + ((parent.bottom - parent.top - message.getBoundingClientRect().height) / 2)}px`;
                message.style.left = `calc(${parent.right}px + 1rem)`;

                return;
            }

            document.body.appendChild(toolTip);
        });

        addCategoryButtons[i].addEventListener("mouseleave", () => {
            const toolTip = document.getElementById("add-category-tooltip");
            document.body.removeChild(toolTip);
        });

    }
}

//
//  Add Transaction
//

const addTransactionButtonContainer = document.getElementById("add-transaction-container");
const addTransactionButton = document.getElementById("add-transaction");

if (addTransactionButton != null) {

    addTransactionButton.addEventListener("mouseover", () => {
        const toolTip = document.getElementById("add-transaction-tooltip");

        if (!toolTip) {
            const message = document.createElement("span");

            message.classList.add("tool-tip");
            message.id = "add-transaction-tooltip";
            message.textContent = "Add Transaction";

            addTransactionButtonContainer.appendChild(message);
            return;
        }
        
        addTransactionButtonContainer.appendChild(toolTip);
    });

    addTransactionButton.addEventListener("mouseleave", () => {
        const toolTip = document.getElementById("add-transaction-tooltip");
        addTransactionButtonContainer.removeChild(toolTip);
    });

}

//
//  Add Goal
//

const addGoalButtonContainer = document.getElementById("add-goal-container");
const addGoalButton = document.getElementById("add-goal");

if (addGoalButton != null) {

    addGoalButton.addEventListener("mouseover", () => {
        const toolTip = document.getElementById("add-goal-tooltip");

        if (!toolTip) {
            const message = document.createElement("span");

            message.classList.add("tool-tip");
            message.id = "add-goal-tooltip";
            message.textContent = "Add Goal";

            addGoalButtonContainer.appendChild(message);
            return;
        }
        
        addGoalButtonContainer.appendChild(toolTip);
    });

    addGoalButton.addEventListener("mouseleave", () => {
        const toolTip = document.getElementById("add-goal-tooltip");
        addGoalButtonContainer.removeChild(toolTip);
    });

}

//
//  Add Account
//

const addAccountButtonContainer = document.getElementById("add-account-container");
const addAccountButton = document.getElementById("add-account");

if (addAccountButton != null) {

    addAccountButton.addEventListener("mouseover", () => {
        const toolTip = document.getElementById("add-account-tooltip");

        if (!toolTip) {
            const message = document.createElement("span");

            message.classList.add("tool-tip");
            message.id = "add-account-tooltip";
            message.textContent = "Add Account";

            addAccountButtonContainer.appendChild(message);
            return;
        }
        
        addAccountButtonContainer.appendChild(toolTip);
    });

    addAccountButton.addEventListener("mouseleave", () => {
        const toolTip = document.getElementById("add-account-tooltip");
        addAccountButtonContainer.removeChild(toolTip);
    });

}