import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      title: {
        display: true,
        text: "#Candidates",
        color: "black",
        font: {
          size: 18,
          style: "oblique",
        },

        padding: {
          bottom: 50,
        },
      },
      ticks: {
        color: "black",
        font: {
          size: 14,
        },
        precision: 0,
        maxTicksLimit: 4,
      },
      grid: {
        drawBorder: false,
      },
    },
    x: {
      title: {
        display: true,
        text: "Percentage Score",
        color: "black",
        font: {
          size: 18,
          style: "oblique",
        },
        padding: {
          top: 20,
        },
      },
      ticks: {
        color: "black",
        font: {
          size: 16,
        },
      },
      grid: {
        borderWidth: 2,
        borderColor: "black",
        display: false,
      },
    },
  },
};

const Barchart = ({ data1 }) => {
  const data = {
    datasets: [
      {
        borderRadius: 5,
        barPercentage: 0.8,
        data: { ...data1 },
        backgroundColor: "#A85CF9",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default Barchart;
