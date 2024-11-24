document.addEventListener("DOMContentLoaded", function () {
  const globalCtx = document.getElementById("globalTempChart").getContext("2d");
  const globalTempChart = new Chart(globalCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Global Average Temperature (°C)",
          data: [14.5, 14.8, 15.0, 15.2, 15.5],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Temperature (°C)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Year",
          },
        },
      },
    },
  });

  const indianCtx = document.getElementById("indianTempChart").getContext("2d");
  const indianTempChart = new Chart(indianCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Indian Average Temperature (°C)",
          data: [23.0, 23.2, 23.5, 23.8, 24.0],
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 2,
        },
      ],
    },
  });
});
