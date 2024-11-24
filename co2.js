document.addEventListener("DOMContentLoaded", function () {
  const globalCtx = document.getElementById("globalCO2Chart").getContext("2d");
  const globalCO2Chart = new Chart(globalCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Global CO2 Level (ppm)",
          data: [368.5, 379.4, 389.8, 403.3, 412.5],
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
            text: "CO2 Level (ppm)",
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

  const indianCtx = document.getElementById("indianCO2Chart").getContext("2d");
  const indianCO2Chart = new Chart(indianCtx, {
    type: "line",
    data: {
      labels: [2000, 2005, 2010, 2015, 2020],
      datasets: [
        {
          label: "Indian CO2 Level (ppm)",
          data: [372.1, 379.0, 384.5, 393.2, 400.0],
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
            text: "CO2 Level (ppm)",
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
