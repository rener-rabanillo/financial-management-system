const activityContext = document.getElementById('activityChart');

new Chart(activityContext, {
    type: 'bar',
    data: {
        labels: ['September', 'October', 'November'],
        datasets: [
            {
                label: 'Income',
                data: [20000, 20000, 22000],
                borderWidth: 1,
                backgroundColor: '#85BF46',
                borderColor: '#85BF46'
            },
            {
                label: 'Expense',
                data: [18000, 17500, 68900],
                borderWidth: 1,
                backgroundColor: '#245484',
                borderColor: '#245484'
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});