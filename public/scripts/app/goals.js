const goalsContainer = document.getElementById("goals");

const goalsData = [
  { name: "Emergency Fund", type: "Savings", target: 50000, saved: 50000 },
  { name: "Credit Card", type: "Debts", target: 20000, saved: 5000 },
  { name: "New Laptop", type: "Savings", target: 40000, saved: 15000 }
];  

goalsContainer.innerHTML = "";
goalsContainer.classList.add("goals-list");

goalsData.forEach(goal => {
  const progressPercent = Math.min(100, ((goal.saved / goal.target) * 100)).toFixed(1);
  
  // Logic: Choose a modifier class based on the type
  const typeClass = goal.type === "Debts" ? "goal-card__type--debt" : "goal-card__type--savings";
  const barClass = goal.type === "Debts" ? "goal-card__progress-bar--debt" : "goal-card__progress-bar--savings";

  const card = document.createElement("div");
  card.classList.add("goal-card");

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
        <div class="goal-card__menu-icon">&#8942;</div>
      </div>
    </div>

    <div class="goal-card__progress-container">
      <div class="goal-card__progress-bar ${barClass}" style="width: 0%"></div>
    </div>
  `;

  goalsContainer.appendChild(card);

  setTimeout(() => {
    const bar = card.querySelector(".goal-card__progress-bar");
    bar.style.width = `${progressPercent}%`;
  }, 100);
});