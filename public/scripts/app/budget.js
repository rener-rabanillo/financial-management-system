const budget = document.getElementById("budget-main-content");

const data = [
    { group: "Needs", category: "Food", budgeted: "₱ 1000.00", spent: "₱ 500.00", available: "₱ 500.00" },
    { group: "Needs", category: "Water", budgeted: "₱ 500.00", spent: "₱ 100.00", available: "₱ 400.00" },
    { group: "Wants", category: "Dining out", budgeted: "₱ 2000.00", spent: "₱ 1500.00", available: "₱ 500.00" },
    { group: "Wants", category: "Netflix subscription", budgeted: "₱ 500.00", spent: "₱ 0.00", available: "₱ 500.00" },
    { group: "Savings", category: "Emergency fund", budgeted: "₱ 5000.00", spent: "₱ 0.00", available: "₱ 5000.00" },
    { group: "Savings", category: "Investment", budgeted: "₱ 10000.00", spent: "₱ 0.00", available: "₱ 10000.00" }
];


const groups = [];
for (let i = 0; i < data.length; i++) {
    if (!groups.includes(data[i].group)) {
        groups.push(data[i].group);
    }
}

const table = document.createElement("table");

const colWidths = ["auto", "150px", "150px", "150px", "150px", "50px"];
const colgroup = document.createElement("colgroup");
for (let i = 0; i < colWidths.length; i++) {
    const col = document.createElement("col");
    col.style.width = colWidths[i];
    colgroup.appendChild(col);
}
table.appendChild(colgroup);

const thead = document.createElement("thead");
const headRow = document.createElement("tr");
const headers = ["Category", "Budgeted", "Spent", "Available", "", ""];
for (let i = 0; i < headers.length; i++) {
    const th = document.createElement("th");
    th.textContent = headers[i];
    headRow.appendChild(th);
}
thead.appendChild(headRow);
table.appendChild(thead);

for (let g = 0; g < groups.length; g++) {
    const tbody = document.createElement("tbody");

    const groupRow = document.createElement("tr");
    const groupCell = document.createElement("td");
    groupCell.setAttribute("colspan", 6);
    groupCell.classList.add("category-group");

    const groupText = document.createElement("span");
    groupText.classList.add("category-group-text");
    groupText.textContent = groups[g];

    const addBtn = document.createElement("button");
    addBtn.classList.add("addCategoryButton", "btn", "btn-round-outline-white");
    addBtn.textContent = "+";

    groupCell.appendChild(groupText);
    groupCell.appendChild(addBtn);
    groupRow.appendChild(groupCell);
    tbody.appendChild(groupRow);


    for (let i = 0; i < data.length; i++) {
        if (data[i].group === groups[g]) {
            const row = document.createElement("tr");

            const catCell = document.createElement("td");
            catCell.textContent = data[i].category;

            const budgetedCell = document.createElement("td");
            budgetedCell.textContent = data[i].budgeted;

            const spentCell = document.createElement("td");
            spentCell.textContent = data[i].spent;

            const availableCell = document.createElement("td");
            availableCell.textContent = data[i].available;

            const setBudgetCell = document.createElement("td");
            const setBudgetBtn = document.createElement("button");
            setBudgetBtn.classList.add("setBudgetButton", "btn", "btn-round-outline-gray");
            setBudgetBtn.textContent = "Set budget";
            setBudgetCell.appendChild(setBudgetBtn);

            const optionsCell = document.createElement("td");
            const optionsBtn = document.createElement("button");
            optionsBtn.classList.add("btn", "showOptionsButton");
            optionsBtn.textContent = "⋮";
            optionsCell.appendChild(optionsBtn);

            row.appendChild(catCell);
            row.appendChild(budgetedCell);
            row.appendChild(spentCell);
            row.appendChild(availableCell);
            row.appendChild(setBudgetCell);
            row.appendChild(optionsCell);

            tbody.appendChild(row);
        }
    }

    table.appendChild(tbody);
}

budget.appendChild(table);
