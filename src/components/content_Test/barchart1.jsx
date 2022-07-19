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
  onHover: (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? "pointer" : "default";
  },
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
        maxTicksLimit: 6,
      },
      grid: {
        drawBorder: false,
      },
    },
    x: {
      title: {
        display: true,
        text: "Time",
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
          size: 14,
        },
        maxTicksLimit: 9,
      },
      grid: {
        borderColor: "black",
        display: false,
      },
    },
  },
};

const Barchart1 = ({ data1 }) => {
  const data = {
    labels: data1["year"],
    datasets: [
      {
        barPercentage: 0.8,
        data: data1["tests"],
        backgroundColor: "#A85CF9",
      },
    ],
  };
  const clickhandler = () => {
    console.log("clicked");
  };

  return <Bar onClick={clickhandler} options={options} data={data} />;
};
/*
const Barchart1 = ({ data, handleClick }) => {
  const chartRef = useRef(null);

  const clickhandler = (event) => {
    const { current: chart } = chartRef;
    const barv = getElementAtEvent(chart, event);
    if (barv.length != 0) {
      handleClick(barv[0].index);
    }
  };
  console.log(data);
  return (
    <Bar onClick={clickhandler} ref={chartRef} options={options} data={data} />
  );
};
*/

export default Barchart1;
