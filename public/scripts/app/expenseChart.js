const expenseContext = document.getElementById('expenseChart');

new Chart(expenseContext, {
    type: 'pie',
    data: {
        labels: ['Food', 'Water', 'Electricity', 'Dining Out', 'Netflix Subscription', 'Emergency Fund', 'Investment'],
        datasets: [{
            label: 'Income',
            data: [1000, 1000, 2000, 500, 250, 5000, 7000],
            borderWidth: 1,
            backgroundColor: ['black', 'red', 'blue', 'yellow', 'green', 'orange', 'purple'],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});