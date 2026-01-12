"use strict";

const budgets = document.getElementById("budgets");
const categoryGroup = [
    {
        name: "Needs",
        categories: [
            {
                name: "Food",
                type: "Outflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            },
            {
                name: "Food",
                type: "Outflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            }
        ]
    },
    {
        name: "Wants",
        categories: [
            {
                name: "Netflix",
                type: "Outflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            },
            {
                name: "Travel",
                type: "Outflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            }
        ]
    },
    {
        name: "Savings",
        categories: [
            {
                name: "Investments",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            },
            {
                name: "Insurance",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            }
        ]
    },
    {
        name: "Savings",
        categories: [
            {
                name: "Investments",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            },
            {
                name: "Insurance",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            }
        ]
    },
    {
        name: "Savings",
        categories: [
            {
                name: "Investments",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            },
            {
                name: "Insurance",
                type: "Inflow",
                amount_allocated: 5000,
                amount_spent: 1000,
                amount_available: 4000
            }
        ]
    }
]

function displayData(data) {
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableHeaderRow = document.createElement("tr");

    table.classList.add("budgets__table");
    tableHeader.classList.add("budgets__table-header");
    tableHeaderRow.classList.add("budgets__table-header-row");

    const labels = [ "Category", "Budgeted", "Spent", "Available", "" ];

    for (let i = 0; i < labels.length; i++) {
        const tableHeaderLabel = document.createElement("th");
        tableHeaderLabel.classList.add("budgets__table-header-label");
        tableHeaderLabel.textContent = labels[i];

        if (i === (labels.length - 1)) {
            tableHeaderLabel.colSpan = 2;
        }

        tableHeaderRow.appendChild(tableHeaderLabel);
    }

    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);

    for (let i = 0; i < data.length; i++) {
        const tableBody = document.createElement("tbody");
        const categoryGroupRow = document.createElement("tr");
        const categoryGroupData = document.createElement("td");
        const categoryGroupContent = document.createElement("div");
        const categoryGroupText = document.createElement("span");
        const addCategoryButton = document.createElement("button");

        tableBody.classList.add("budgets__table-body");
        categoryGroupRow.classList.add("budgets__category-group-row");
        categoryGroupData.colSpan = 6;
        categoryGroupContent.classList.add("budgets__category-group-content");
        categoryGroupText.classList.add("budgets__category-group-text");
        addCategoryButton.classList.add("budgets__add-category-button", "add-category", "btn", "btn-round-outline-white");

        categoryGroupText.textContent = data[i].name;
        addCategoryButton.innerHTML =
            `
                <svg class="budgets__add-category-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                </svg>
            `
        ;

        categoryGroupContent.appendChild(categoryGroupText);
        categoryGroupContent.appendChild(addCategoryButton);
        categoryGroupData.appendChild(categoryGroupContent);
        categoryGroupRow.appendChild(categoryGroupData);
        tableBody.appendChild(categoryGroupRow);

        for (let j = 0; j < data[i].categories.length; j++) {
            const categoryRow = document.createElement("tr");
            const categoryName = document.createElement("td");
            const amountBudgeted = document.createElement("td");
            const amountSpent = document.createElement("td");
            const amountAvailable = document.createElement("td");
            const setBudget = document.createElement("td");
            const options = document.createElement("td");
            const categoryNameContent = document.createElement("div");
            const amountBudgetedContent = document.createElement("div");
            const amountSpentContent = document.createElement("div");
            const amountAvailableContent = document.createElement("div");
            const setBudgetButton = document.createElement("button");
            const optionsButton = document.createElement("button");

            categoryRow.classList.add("budgets__category-row");
            categoryName.classList.add("budgets__category-data");
            amountBudgeted.classList.add("budgets__category-data");
            amountSpent.classList.add("budgets__category-data");
            amountAvailable.classList.add("budgets__category-data");
            categoryNameContent.classList.add("budgets__category-content");
            amountBudgetedContent.classList.add("budgets__category-content");
            amountSpentContent.classList.add("budgets__category-content");
            amountAvailableContent.classList.add("budgets__category-content");
            setBudget.classList.add("budgets__set-budget-container");
            options.classList.add("budgets__options-container");
            setBudgetButton.classList.add("budgets__set-budget-button", "btn", "btn-round-outline-gray");
            optionsButton.classList.add("budgets__options-button");

            categoryNameContent.textContent = data[i].categories[j].name;
            amountBudgetedContent.textContent = data[i].categories[j].amount_allocated;
            amountSpentContent.textContent = data[i].categories[j].amount_spent;
            amountAvailableContent.textContent = data[i].categories[j].amount_available
            setBudgetButton.textContent = "Set Budget";
            optionsButton.innerHTML =
                `
                    <svg class="budgets__options-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                    </svg>
                `
            ;

            setBudget.appendChild(setBudgetButton);
            options.appendChild(optionsButton);
            categoryName.appendChild(categoryNameContent);
            amountBudgeted.appendChild(amountBudgetedContent);
            amountSpent.appendChild(amountSpentContent);
            amountAvailable.appendChild(amountAvailableContent);
            categoryRow.appendChild(categoryName);
            categoryRow.appendChild(amountBudgeted);
            categoryRow.appendChild(amountSpent);
            categoryRow.appendChild(amountAvailable);
            categoryRow.appendChild(setBudget);
            categoryRow.appendChild(options);
            tableBody.appendChild(categoryRow);
        }

        table.appendChild(tableBody);
    }

    const colGroup = document.createElement("colgroup");
    const col1 = document.createElement("col");
    const col2 = document.createElement("col");
    const col3 = document.createElement("col");
    const col4 = document.createElement("col");
    const col5 = document.createElement("col");
    const col6 = document.createElement("col");

    col1.style.width = "20%";
    col2.style.width = "20%";
    col3.style.width = "20%";
    col4.style.width = "20%";
    col5.style.width = "10%";
    col6.style.width = "10%";

    colGroup.appendChild(col1);
    colGroup.appendChild(col2);
    colGroup.appendChild(col3);
    colGroup.appendChild(col4);
    colGroup.appendChild(col5);
    colGroup.appendChild(col6);
    table.appendChild(colGroup);

    budgets.appendChild(table);
}

displayData(categoryGroup);