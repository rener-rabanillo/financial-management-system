const goalsContainer = document.getElementById("goals");

const goalsData = [
  { name: "Emergency Fund", target: 50000, saved: 50000 },
  { name: "New Laptop", target: 40000, saved: 15000 },
  { name: "Vacation", target: 60000, saved: 10000 }
];


const table = document.createElement("table");
table.classList.add("goals__table");
table.border = "1";
table.cellSpacing = "0";
table.cellPadding = "8";

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>GOAL</th>
    <th>TARGET</th>
    <th>SAVED</th>
    <th>REMAINING</th>
    <th>PROGRESS</th>
  </tr>
`;
table.appendChild(thead);

const tbody = document.createElement("tbody");

goalsData.forEach(goal => {
  const remaining = goal.target - goal.saved;
  const progressPercent = ((goal.saved / goal.target) * 100).toFixed(1);

  const tr = document.createElement("tr");

  const tdGoal = document.createElement("td");
  tdGoal.textContent = goal.name;

  const tdTarget = document.createElement("td");
  tdTarget.textContent = `₱${goal.target.toLocaleString()}`;

  const tdSaved = document.createElement("td");
  tdSaved.textContent = `₱${goal.saved.toLocaleString()}`;

  const tdRemaining = document.createElement("td");
  tdRemaining.textContent = `₱${remaining.toLocaleString()}`;

  const tdProgress = document.createElement("td");
  const progressContainer = document.createElement("div");
  progressContainer.style.width = "100px";
  progressContainer.style.height = "10px";
  progressContainer.style.backgroundColor = "#ddd";
  progressContainer.style.borderRadius = "5px";
  progressContainer.style.overflow = "hidden";

  const progressBar = document.createElement("div");
  progressBar.style.width = "0"; 
  progressBar.style.height = "100%";
  progressBar.style.backgroundColor = "#2196F3";
  progressBar.style.borderRadius = "5px";
  progressBar.style.transition = "width 1s ease";

  setTimeout(() => {
    progressBar.style.width = `${progressPercent}%`;
  }, 50);

  progressContainer.appendChild(progressBar);
  tdProgress.appendChild(progressContainer);

  tr.appendChild(tdGoal);
  tr.appendChild(tdTarget);
  tr.appendChild(tdSaved);
  tr.appendChild(tdRemaining);
  tr.appendChild(tdProgress);

  tbody.appendChild(tr);
});

table.appendChild(tbody);
goalsContainer.appendChild(table);
