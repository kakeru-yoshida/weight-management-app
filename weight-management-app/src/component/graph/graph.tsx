import React, { useEffect, useState } from "react";
import axios from "axios";
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
import "./graph.css";

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
  const [apiData, setApiData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // APIからデータを取得
        const response = await axios.get("http://localhost:3000/api/data");
        // データが取得できた場合はstateにセット
        setApiData(response.data);
      } catch (error) {
        console.error("API取得エラー:", error);
      }
    };
    fetchData();
  }, []);
  console.log(apiData)
  // グラフのデータ
  const graphData = {
    labels: ["12/11", "12/11", "12/11", "12/11", "12/11", "12/11"],
    datasets: [
      {
        label: "体重",
        data: [100, 27, 55, 12, 1, 5],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "目標体重",
        data: [55, 55, 55, 55, 55, 55],
        borderColor: "red",
      },
    ],
  };

  // グラフのオプション
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "グラフタイトル",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="graph-content">
      <Line height={20} width={100} data={graphData} options={options} id="chart-key" />
    </div>
  );
};

export default Graph;
