const transactions = document.getElementById("transactions-main-content");

const table = document.createElement("table");
const thead = document.createElement("thead");
const labelRow = document.createElement("tr");

const dateLabel = document.createElement("th");
const accountLabel = document.createElement("th");
const categoryLabel = document.createElement("th");
const noteLabel = document.createElement("th");
const outflowLabel = document.createElement("th");
const inflowLabel = document.createElement("th");

dateLabel.textContent = "Date";
accountLabel.textContent = "Account";
categoryLabel.textContent = "Category";
noteLabel.textContent = "Note";
outflowLabel.textContent = "Outflow";
inflowLabel.textContent = "Inflow";

labelRow.appendChild(dateLabel);
labelRow.appendChild(accountLabel);
labelRow.appendChild(categoryLabel);
labelRow.appendChild(noteLabel);
labelRow.appendChild(outflowLabel);
labelRow.appendChild(inflowLabel);

thead.appendChild(labelRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
 
const data  = [
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
    }
];

for (let i = 0; i < data.length; i++) {
    const dataRow = document.createElement("tr");

    const date = document.createElement("td");
    const account = document.createElement("td");
    const category = document.createElement("td");
    const note = document.createElement("td");
    const priceOutflow = document.createElement("td");
    const priceInflow = document.createElement("td");
    
    date.textContent = data[i].date;
    account.textContent = data[i].account;
    category.textContent = data[i].category;
    note.textContent = data[i].note;
    priceOutflow.textContent = data[i].outflow;
    priceInflow.textContent = data[i].inflow;

    dataRow.appendChild(date);
    dataRow.appendChild(account);
    dataRow.appendChild(category);
    dataRow.appendChild(note);
    dataRow.appendChild(priceOutflow);
    dataRow.appendChild(priceInflow);

    tbody.appendChild(dataRow);
}

table.appendChild(tbody);
transactions.appendChild(table);