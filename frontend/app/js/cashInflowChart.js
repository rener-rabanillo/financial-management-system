const cashInflowContext = document.getElementById('cash-inflow-chart');

new Chart(cashInflowContext, {
    type: 'bar',
    data: {
        labels: ['September', 'October', 'November'],
        datasets: [{
            label: 'Cash Inflow',
            data: [20000, 20000, 22000],
            borderWidth: 1,
            backgroundColor: '#85BF46',
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