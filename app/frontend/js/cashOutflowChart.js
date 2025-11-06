const cashOutflowContext = document.getElementById('cash-outflow-chart');

new Chart(cashOutflowContext, {
    type: 'bar',
    data: {
        labels: ['September', 'October', 'November'],
        datasets: [{
            label: 'Cash Outflow',
            data: [18000, 17500, 68900],
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            borderColor: '#245484',
            tension: 0.4
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