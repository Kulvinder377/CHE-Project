document.addEventListener("DOMContentLoaded", function () {
  const globalCtx = document
    .getElementById("globalPrecipitationChart")
    .getContext("2d");
  const globalPrecipitationChart = new Chart(globalCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Global Precipitation (mm)",
          data: [840, 860, 870, 830, 850],
          borderColor: "rgba(255, 205, 86, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff",
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          titleColor: "#fff",
          bodyColor: "#fff",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#fff",
          },
        },
        y: {
          title: {
            display: true,
            text: "Precipitation (mm)",
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#fff",
          },
        },
      },
    },
  });

  const indianCtx = document
    .getElementById("indianPrecipitationChart")
    .getContext("2d");
  const indianPrecipitationChart = new Chart(indianCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Indian Precipitation (mm)",
          data: [950, 900, 920, 880, 1000],
          borderColor: "rgba(86, 255, 206, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff",
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          titleColor: "#fff",
          bodyColor: "#fff",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#fff",
          },
        },
        y: {
          title: {
            display: true,
            text: "Precipitation (mm)",
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          ticks: {
            color: "#fff",
          },
        },
      },
    },
  });
});
