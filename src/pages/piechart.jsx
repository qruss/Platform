import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
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

const Piechart = ({ data1 }) => {
  const data = {
    labels: data1["language"],
    datasets: [
      {
        label: "# of Candidates",
        data: data1["candidates"],
        backgroundColor: data1["color"],
        borderWidth: 0,
      },
    ],
  };
  return <Pie data={data} options={options} />;
};

export default Piechart;
