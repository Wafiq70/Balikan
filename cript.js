let votes = {
  danar: 0,
  viba: 0,
  wulan: 0,
  netral: 0,
  golput: 0
};

const ctx = document.getElementById('pollChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(votes),
    datasets: [{
      label: 'Votes',
      data: Object.values(votes),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

document.getElementById("pollForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const kubu = formData.get("kubu");
  votes[kubu]++;
  updateChart();
  alert("Terima kasih atas partisipasinya!");
});

function updateChart() {
  myChart.data.datasets[0].data = Object.values(votes);
  myChart.update();
}
