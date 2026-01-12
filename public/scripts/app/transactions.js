const transactions = document.getElementById("transactions");

const table = document.createElement("div");
const tableHeader = document.createElement("div");
const tableHeaderRow = document.createElement("div");

table.classList.add("transactions__table");
tableHeader.classList.add("transactions__table-header");
tableHeaderRow.classList.add("transactions__table-header-row");

const dateLabel = document.createElement("span");
const accountLabel = document.createElement("span");
const categoryLabel = document.createElement("span");
const noteLabel = document.createElement("span");
const outflowLabel = document.createElement("span");
const inflowLabel = document.createElement("span");

dateLabel.classList.add("transactions__table-header-data");
accountLabel.classList.add("transactions__table-header-data");
categoryLabel.classList.add("transactions__table-header-data");
noteLabel.classList.add("transactions__table-header-data");
outflowLabel.classList.add("transactions__table-header-data");
inflowLabel.classList.add("transactions__table-header-data");

dateLabel.textContent = "Date";
accountLabel.textContent = "Account";
categoryLabel.textContent = "Category";
noteLabel.textContent = "Note";
outflowLabel.textContent = "Outflow";
inflowLabel.textContent = "Inflow";

tableHeaderRow.appendChild(dateLabel);
tableHeaderRow.appendChild(accountLabel);
tableHeaderRow.appendChild(categoryLabel);
tableHeaderRow.appendChild(noteLabel);
tableHeaderRow.appendChild(outflowLabel);
tableHeaderRow.appendChild(inflowLabel);

tableHeader.appendChild(tableHeaderRow);
table.appendChild(tableHeader);

const tableBody = document.createElement("ul");
tableBody.classList.add("transactions__table-body");
 
const data  = [
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "EXP: Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "EXP: Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "IN: Salary",
        note: "",
        outflow: "",
        inflow: "P 250.00"
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "GOAL: Savings",
        note: "",
        outflow: "",
        inflow: "P 500.00"
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    },
    {
        date: "2026/01/01",
        account: "Landbank",
        category: "Clothing",
        note: "",
        outflow: "P 500.00",
        inflow: ""
    },
    {
        date: "2026/01/02",
        account: "Cash",
        category: "Laptop",
        note: "Stipend",
        outflow: "P 50000.00",
        inflow: ""
    },
    {
        date: "2025/12/25",
        account: "Cash",
        category: "Gift",
        note: "Merry Christmas",
        outflow: "P 250.00",
        inflow: ""
    }
];

for (let i = 0; i < data.length; i++) {
    const tableBodyRow = document.createElement("li");
    tableBodyRow.classList.add("transactions__table-body-row");

    const dateData = document.createElement("span");
    const accountData = document.createElement("span");
    const categoryData = document.createElement("span");
    const noteData = document.createElement("span");
    const priceOutflowData = document.createElement("span");
    const priceInflowData = document.createElement("span");
    
    dateData.classList.add("transactions__table-body-data");
    accountData.classList.add("transactions__table-body-data");
    categoryData.classList.add("transactions__table-body-data");
    noteData.classList.add("transactions__table-body-data");
    priceOutflowData.classList.add("transactions__table-body-data");
    priceInflowData.classList.add("transactions__table-body-data");
    
    dateData.textContent = data[i].date;
    accountData.textContent = data[i].account;
    categoryData.textContent = data[i].category;
    noteData.textContent = data[i].note;
    priceOutflowData.textContent = data[i].outflow;
    priceInflowData.textContent = data[i].inflow;

    tableBodyRow.appendChild(dateData);
    tableBodyRow.appendChild(accountData);
    tableBodyRow.appendChild(categoryData);
    tableBodyRow.appendChild(noteData);
    tableBodyRow.appendChild(priceOutflowData);
    tableBodyRow.appendChild(priceInflowData);

    tableBody.appendChild(tableBodyRow);
}

table.appendChild(tableBody);
transactions.appendChild(table);