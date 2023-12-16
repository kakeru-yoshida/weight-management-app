import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import './graph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "グラフタイトル",
      },
    },
    maintainAspectRatio: false
  };

  const labels = [
    "12/11",
    "12/11",
    "12/11",
    "12/11",
    "12/11",
    "12/11",
  ];

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "体重",
        data: [65, 59, 60, 81, 56, 55, 59, 60, 81, 56, 55, 59, 60, 81, 56, 55, 59, 60, 81, 56, 55, 59, 60, 81, 56, 55, 59, 60, 81, 56, 55],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "目標体重",
        data: [55, 55, 55, 55, 55, 55],
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="graph-content">
      <Line
        height={20}
        width={100}
        data={graphData}
        options={options}
        id="chart-key"
      />
    </div>
  );
};

export default Graph;
