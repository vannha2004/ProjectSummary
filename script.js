document.addEventListener('DOMContentLoaded', () => {
  // Handle click on buttons and nav links with data-scroll or href for smooth scrolling
  // === Biểu đồ Chart.js ===
const ctx = document.getElementById('performanceChart');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Toán', 'Văn', 'Anh'],
      datasets: [
        {
          label: 'Học kỳ I',
          data: [7.58, 7.68, 6.13],
          backgroundColor: '#60a5fa'
        },
        {
          label: 'Học kỳ II',
          data: [7.57, 7.70, 6.75],
          backgroundColor: '#34d399'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          suggestedMin: 5,
          suggestedMax: 10
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'So sánh điểm trung bình hai học kỳ'
        }
      }
    }
  });
}

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  // Buttons with data-scroll attribute
  document.querySelectorAll('button[data-scroll]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.scroll;
      scrollToSection(targetId);
    });
  });

  // Nav links that anchor within page
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
});
