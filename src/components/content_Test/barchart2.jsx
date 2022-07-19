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
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: "Median Time",
        color: "black",
        font: {
          size: 20,
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
        maxTicksLimit: 6,
      },
      grid: {
        borderColor: "black",
      },
    },
    y: {
      title: {
        display: true,
        text: "Question ID",
        color: "black",
        font: {
          size: 20,
          style: "oblique",
        },
        padding: {
          top: 20,
        },
      },
      ticks: {
        color: "black",
        font: {
          size: 11,
        },
        maxTicksLimit: 200,
      },
      grid: {
        borderColor: "black",
        display: false,
      },
    },
  },
};

const Barchart2 = ({ data1 }) => {
  const data = {
    labels: data1["id"],
    datasets: [
      {
        barPercentage: 0.8,
        data: data1["score"],
        backgroundColor: "#A85CF9",
      },
    ],
  };
  return <Bar height={data1["id"].length * 20} options={options} data={data} />;
};

export default Barchart2;
