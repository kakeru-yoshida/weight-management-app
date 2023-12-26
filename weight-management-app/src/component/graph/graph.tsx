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

interface ApiData {
  date: string;
  weight: number;
  target_weight: number;
}

// 日付をフォーマットする関数
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });
};

const Graph: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // APIからデータを取得
        const response = await axios.get<ApiData[]>("http://localhost:3000/api/data");
        // データが取得できた場合はstateにセット
        setApiData(response.data);
      } catch (error) {
        console.error("API取得エラー:", error);
      }
    };
    fetchData();
  }, []);

  // ラベルの取得とフォーマット
  const labels = apiData.map((data) => formatDate(data.date));

  // グラフのデータ
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "体重",
        data: apiData.map((data) => data.weight),
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "目標体重",
        data: apiData.map((data) => data.target_weight),
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
