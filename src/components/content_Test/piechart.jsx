import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
          return context.label + " : " + context.formattedValue + "%";
        },
      },
    },
    title: {
      display: false,
      text: "Candidates by Language",
      color: "black",

      font: {
        size: 18,
        style: "oblique",
      },

      padding: {
        bottom: 50,
      },
    },
    legend: {
      display: true,
      position: "right",
      onClick() {},
      labels: {
        usePointstyle: true,
        pointStyle: "star",
      },
    },
  },
  maintainAspectRatio: false,
};

const Doughnut1 = ({ data1 }) => {
  const data = {
    labels: data1["status"],
    datasets: [
      {
        label: "# of Candidates",
        data: data1["percentage"],
        backgroundColor: ["rgba(0, 255, 0, 0.91)", "rgba(255, 0, 0, 0.68)"],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default Doughnut1;
