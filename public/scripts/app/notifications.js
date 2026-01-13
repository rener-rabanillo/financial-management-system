const notifications = document.getElementById("notifications-main-content");

const data = [
  { title: "Electricity Bill Due", message: "Your Electricity bill of ₱500 is due on Jan 15", type: "alert", date: "2026-01-13" },
  { title: "Budget Exceeded", message: "You spent ₱1500 on Dining out this month, exceeding the budget.", type: "warning", date: "2026-01-12" }
];

data.forEach(notif => {
  const card = document.createElement("div");
  card.classList.add("card", notif.type); // type can control color: alert, warning, info
  card.innerHTML = `
    <h3>${notif.title}</h3>
    <p>${notif.message}</p>
    <small>${notif.date}</small>
  `;
  notifications.appendChild(card);
});
