const goalsContainer = document.getElementById("goals");

const goalsData = [
  { 
    id: 1,
    name: "Emergency Fund", 
    type: "Savings", 
    target: 50000, 
    saved: 15000,
    dueDate: "2026-12-31",
    dateAccomplished: null 
  },
  { 
    id: 2,
    name: "Credit Card", 
    type: "Debts", 
    target: 20000, 
    saved: 5000, 
    dueDate: "2026-06-15",
    dateAccomplished: null 
  }
];

function renderGoals() {
  goalsContainer.innerHTML = "";
  
  goalsData.forEach(goal => {
    const progressPercent = Math.min(100, ((goal.saved / goal.target) * 100)).toFixed(1);
    const typeClass = goal.type === "Debts" ? "goal-card__type--debt" : "goal-card__type--savings";
    const barClass = goal.type === "Debts" ? "goal-card__progress-bar--debt" : "goal-card__progress-bar--savings";

    const isFinished = goal.saved >= goal.target;

    const card = document.createElement("div");
    card.classList.add("goal-card");

    const statusContent = isFinished 
      ? `<div class="goal-card__done-status">Accomplished: ${goal.dateAccomplished || new Date().toLocaleDateString()}</div>`
      : `<div class="goal-card__progress-bar ${barClass}" style="width: 0%"></div>`;

    card.innerHTML = `
      <div class="goal-card__header">
        <div class="goal-card__details">
          <div class="goal-card__title">${goal.name}</div>
          <div class="goal-card__type ${typeClass}">${goal.type}</div>
        </div>
        
        <div class="goal-card__meta">
          <div class="goal-card__amount">
             ₱${goal.saved.toLocaleString()} / ₱${goal.target.toLocaleString()}
          </div>
          <div class="goal-card__menu-container">
            <div class="goal-card__menu-icon">&#8942;</div>
            <div class="goal-card__dropdown">
              <div class="goal-card__dropdown-item" onclick="openEditModal(${goal.id})">Edit Goal</div>
              <div class="goal-card__dropdown-item goal-card__dropdown-item--delete" onclick="deleteGoal(${goal.id})">Delete</div>
            </div>
          </div>
        </div>
      </div>

      <div class="goal-card__progress-container">
        ${statusContent}
      </div>
      <div class="goal-card__due-date">Due: ${goal.dueDate}</div>
    `;

    const menuBtn = card.querySelector('.goal-card__menu-icon');
    const dropdown = card.querySelector('.goal-card__dropdown');
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.goal-card__dropdown--active').forEach(d => {
            if (d !== dropdown) d.classList.remove('goal-card__dropdown--active');
        });
        dropdown.classList.toggle('goal-card__dropdown--active');
    });

    goalsContainer.appendChild(card);

    if (!isFinished) {
      setTimeout(() => {
        const bar = card.querySelector(".goal-card__progress-bar");
        if (bar) bar.style.width = `${progressPercent}%`;
      }, 100);
    }
  });
}

window.openEditModal = function(id) {
    const goal = goalsData.find(g => g.id === id);
    if (!goal) return;

    document.getElementById("editGoalId").value = goal.id;
    document.getElementById("editGoalName").value = goal.name;
    document.getElementById("editGoalSaved").value = goal.saved;
    document.getElementById("editGoalTarget").value = goal.target;
    document.getElementById("editGoalDate").value = goal.dueDate;

    document.getElementById("editGoalModal").style.display = "flex";
};

document.getElementById("editGoalForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const id = parseInt(document.getElementById("editGoalId").value);
    const goalIndex = goalsData.findIndex(g => g.id === id);

    const newSaved = parseFloat(document.getElementById("editGoalSaved").value);
    const newTarget = parseFloat(document.getElementById("editGoalTarget").value);

    goalsData[goalIndex].name = document.getElementById("editGoalName").value;
    goalsData[goalIndex].saved = newSaved;
    goalsData[goalIndex].target = newTarget;
    goalsData[goalIndex].dueDate = document.getElementById("editGoalDate").value;


    if (newSaved >= newTarget) {
        if (!goalsData[goalIndex].dateAccomplished) {
            goalsData[goalIndex].dateAccomplished = new Date().toLocaleDateString();
        }
    } else {
        goalsData[goalIndex].dateAccomplished = null;
    }

    document.getElementById("editGoalModal").style.display = "none";
    renderGoals();
});

document.getElementById("closeEditModal").onclick = () => {
    document.getElementById("editGoalModal").style.display = "none";
};

window.deleteGoal = function(id) {
    if (confirm("Are you sure you want to delete this goal?")) {
        const index = goalsData.findIndex(g => g.id === id);
        if (index > -1) {
            goalsData.splice(index, 1);
            renderGoals();
        }
    }
};

renderGoals();