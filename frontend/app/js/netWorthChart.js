const netWorthContext = document.getElementById('net-worth-chart');

new Chart(netWorthContext, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [{
            label: 'Net Worth',
            data: [500000, 450000, 480000, 320000, 200500, 340000, 455000, 420000, 390000, 370000, 410000],
            borderWidth: 1,
            backgroundColor: '#245484',
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