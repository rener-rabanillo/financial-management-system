"use strict";

const incomeCategories = [
    {
        category_group_id: 100,
        category_group_name: "Needs",
        categories: [
            {
                category_id: 200,
                category_name: "Food",
                received: 5000
            },
            {
                category_id: 201,
                category_name: "Clothing",
                received: 500
            }
        ]
    }
];

const expenseCategories = [
    {
        category_group_id: 101,
        category_group_name: "Needs",
        categories: [
            {
                category_id: 202,
                category_name: "Food",
                allocated: 5000,
                spent: 5000,
                available: 3689
            },
            {
                category_id: 203,
                category_name: "Clothing",
                allocated: 5000,
                spent: 5000,
                available: 789.25
            }
        ]
    }
];

const budgets = document.getElementById("budgets");

displayContent();

function displayContent() {
    if (incomeCategories.length === 0 || expenseCategories.length === 0) {

        return;
    }

    const categoryTypes = document.createElement("div");
    categoryTypes.classList.add("budgets__category-types");

    const income = document.createElement("div");
    income.classList.add("budgets__category-type", "radio-button--no-icon");
    
    const incomeButton = document.createElement("input");
    incomeButton.classList.add("budgets__category-type-radio");
    incomeButton.id = "income";
    incomeButton.name = "category-type";
    incomeButton.type = "radio";

    const incomeLabel = document.createElement("label");
    incomeLabel.classList.add("budgets__category-type-label");
    incomeLabel.textContent = "Income";

    income.appendChild(incomeButton);
    income.appendChild(incomeLabel);

    const expense = document.createElement("div");
    expense.classList.add("budgets__category-type", "radio-button--no-icon");
    
    const expenseButton = document.createElement("input");
    expenseButton.classList.add("budgets__category-type-radio");
    expenseButton.id = "expense";
    expenseButton.name = "category-type";
    expenseButton.type = "radio";

    const expenseLabel = document.createElement("label");
    expenseLabel.classList.add("budgets__category-type-label");
    expenseLabel.textContent = "Expense";

    expense.appendChild(expenseButton);
    expense.appendChild(expenseLabel);

    categoryTypes.appendChild(income);
    categoryTypes.appendChild(expense);
    
    const tableContainer = document.createElement("div");
    tableContainer.classList.add("budgets__table-container");
    tableContainer.id = "budgets-table-container";

    budgets.appendChild(categoryTypes);
    budgets.appendChild(tableContainer);

    const mainTableContainer = document.getElementById("budgets-table-container");
    const selectIncome = () => { mainTableContainer.replaceChildren(getIncomeCategoryTable(incomeCategories)) }
    const selectExpense = () => { mainTableContainer.replaceChildren(getExpenseCategoryTable(expenseCategories)) }
    
    incomeButton.addEventListener("change", selectIncome);
    expenseButton.addEventListener("change", selectExpense);

    incomeButton.checked = true;
    selectIncome();
}

function getIncomeCategoryTable(data) {
    const table = document.createElement("div");
    table.classList.add("budgets__table");

    const tableHeader = document.createElement("div");
    tableHeader.classList.add("budgets__table-header");

    const tableHeaderRow = document.createElement("div");
    tableHeaderRow.classList.add("budgets__table-header-row--income");

    const labels = [ "Category", "Received", "" ];

    for (let i = 0; i < labels.length; i++) {
        const tableHeaderLabel = document.createElement("span");
        tableHeaderLabel.classList.add("budgets__table-header-label");
        tableHeaderLabel.textContent = labels[i];
        tableHeaderRow.appendChild(tableHeaderLabel);
    }

    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);

    for (let i = 0; i < data.length; i++) {
        const tableBody = document.createElement("div");
        tableBody.classList.add("budgets__table-body");

        const tableBodyHeader = document.createElement("div");
        tableBodyHeader.classList.add("budgets__table-body-header");

        const tableBodyHeaderWrapper = document.createElement("div");
        tableBodyHeaderWrapper.classList.add("budgets__table-body-header-wrapper");

        const tableBodyHeaderLabel = document.createElement("span");
        tableBodyHeaderLabel.classList.add("budgets__table-body-header-label");
        tableBodyHeaderLabel.textContent = data[i].category_group_name;

        const tableBodyHeaderAddButton = document.createElement("button");
        tableBodyHeaderAddButton.classList.add("budgets__table-body-header-add-button", "add-income-category", "btn", "btn-round-outline-white");
        tableBodyHeaderAddButton.innerHTML =
            `
                <svg class="budgets__table-body-header-add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                </svg>
            `
        ;

        tableBodyHeaderWrapper.appendChild(tableBodyHeaderLabel);
        tableBodyHeaderWrapper.appendChild(tableBodyHeaderAddButton);

        const tableBodyHeaderOptionsButton = document.createElement("button");
        tableBodyHeaderOptionsButton.classList.add("budgets__table-body-header-options-button");
        tableBodyHeaderOptionsButton.innerHTML =
            `
                <svg class="budgets__table-body-header-options-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                </svg>
            `
        ;

        tableBodyHeader.appendChild(tableBodyHeaderWrapper);
        tableBodyHeader.appendChild(tableBodyHeaderOptionsButton);
        tableBody.appendChild(tableBodyHeader);

        for (let j = 0; j < data[i].categories.length; j++) {
            const formatter = Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP"
            });
            
            const tableBodyRow = document.createElement("div");
            tableBodyRow.classList.add("budgets__table-body-row--income");

            const category = document.createElement("span");
            category.classList.add("budgets__table-body-row-data");
            category.textContent = data[i].categories[j].category_name;

            const allocated = document.createElement("span");
            allocated.classList.add("budgets__table-body-row-data");
            allocated.textContent = formatter.format(data[i].categories[j].received);

            const optionsButton = document.createElement("button");
            optionsButton.classList.add("budgets__table-body-row-options");
            optionsButton.innerHTML =
                `
                    <svg class="budgets__table-body-row-options-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                    </svg>
                `
            ;

            tableBodyRow.appendChild(category);
            tableBodyRow.appendChild(allocated);
            tableBodyRow.appendChild(optionsButton);
            tableBody.appendChild(tableBodyRow);
        }

        table.appendChild(tableBody);
    }

    return table;
}

function getExpenseCategoryTable(data) {
    const table = document.createElement("div");
    table.classList.add("budgets__table");

    const tableHeader = document.createElement("div");
    tableHeader.classList.add("budgets__table-header");

    const tableHeaderRow = document.createElement("div");
    tableHeaderRow.classList.add("budgets__table-header-row--expense");

    const labels = [ "Category", "Allocated", "Spent", "Available", "", "" ];

    for (let i = 0; i < labels.length; i++) {
        const tableHeaderLabel = document.createElement("span");
        tableHeaderLabel.classList.add("budgets__table-header-label");
        tableHeaderLabel.textContent = labels[i];
        tableHeaderRow.appendChild(tableHeaderLabel);
    }

    tableHeader.appendChild(tableHeaderRow);
    table.appendChild(tableHeader);

    for (let i = 0; i < data.length; i++) {
        const tableBody = document.createElement("div");
        tableBody.classList.add("budgets__table-body");

        const tableBodyHeader = document.createElement("div");
        tableBodyHeader.classList.add("budgets__table-body-header");

        const tableBodyHeaderWrapper = document.createElement("div");
        tableBodyHeaderWrapper.classList.add("budgets__table-body-header-wrapper");

        const tableBodyHeaderLabel = document.createElement("span");
        tableBodyHeaderLabel.classList.add("budgets__table-body-header-label");
        tableBodyHeaderLabel.textContent = data[i].category_group_name;

        const tableBodyHeaderAddButton = document.createElement("button");
        tableBodyHeaderAddButton.classList.add("budgets__table-body-header-add-button", "add-expense-category", "btn", "btn-round-outline-white");
        tableBodyHeaderAddButton.innerHTML =
            `
                <svg class="budgets__table-body-header-add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/>
                </svg>
            `
        ;

        tableBodyHeaderWrapper.appendChild(tableBodyHeaderLabel);
        tableBodyHeaderWrapper.appendChild(tableBodyHeaderAddButton);

        const tableBodyHeaderOptionsButton = document.createElement("button");
        tableBodyHeaderOptionsButton.classList.add("budgets__table-body-header-options-button");
        tableBodyHeaderOptionsButton.innerHTML =
            `
                <svg class="budgets__table-body-header-options-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                    <path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                </svg>
            `
        ;

        tableBodyHeader.appendChild(tableBodyHeaderWrapper);
        tableBodyHeader.appendChild(tableBodyHeaderOptionsButton);
        tableBody.appendChild(tableBodyHeader);

        for (let j = 0; j < data[i].categories.length; j++) {
            const formatter = Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP"
            });
            
            const tableBodyRow = document.createElement("div");
            tableBodyRow.classList.add("budgets__table-body-row--expense");

            const category = document.createElement("span");
            category.classList.add("budgets__table-body-row-data");
            category.textContent = data[i].categories[j].category_name;

            const allocated = document.createElement("span");
            allocated.classList.add("budgets__table-body-row-data");
            allocated.textContent = formatter.format(data[i].categories[j].allocated);

            const spent = document.createElement("span");
            spent.classList.add("budgets__table-body-row-data");
            spent.textContent = formatter.format(data[i].categories[j].spent);

            const available = document.createElement("span");
            available.classList.add("budgets__table-body-row-data");
            available.textContent = formatter.format(data[i].categories[j].available);

            const trackbarRow = document.createElement("div");
            trackbarRow.classList.add("budgets__table-body-row-data");

            const trackbarContainer = document.createElement("div");
            trackbarContainer.classList.add("budgets__trackbar-container");

            const trackbar = document.createElement("div");
            trackbar.classList.add("budgets__trackbar");
            trackbar.style.width = `${(data[i].categories[j].available / data[i].categories[j].allocated) * 100}%`;

            trackbarContainer.appendChild(trackbar);
            trackbarRow.appendChild(trackbarContainer);

            const optionsButton = document.createElement("button");
            optionsButton.classList.add("budgets__table-body-row-options");
            optionsButton.innerHTML =
                `
                    <svg class="budgets__table-body-row-options-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                    </svg>
                `
            ;

            tableBodyRow.appendChild(category);
            tableBodyRow.appendChild(allocated);
            tableBodyRow.appendChild(spent);
            tableBodyRow.appendChild(available);
            tableBodyRow.appendChild(trackbarRow);
            tableBodyRow.appendChild(optionsButton);
            tableBody.appendChild(tableBodyRow);
        }

        table.appendChild(tableBody);
    }

    return table;
}