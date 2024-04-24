import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import "./styles/Chart.css";
import { RootState } from "../types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart(): JSX.Element {
  const comments = useSelector(
    (state: RootState) => state.comments.groupedComments
  );

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Words per comment",
        font: {
          size: 16,
        },
      },
    },
  };

  const chartDataObj: any = {
    labels: [],
    datasets: [
      {
        backgroundColor: "#d4d4d4",
        borderColor: "#000",
        borderWidth: 1,
        data: [],
      },
    ],
  };

  const [chartData, setChartData] = useState<any>(chartDataObj);

  useEffect(() => {
    for (const key in comments) {
      if (Object.prototype.hasOwnProperty.call(comments, key)) {
        const elements = comments[key];

        elements.forEach((element) => {
          const { id, count } = element;
          chartDataObj.labels.push(`Comment ${id}`);
          chartDataObj.datasets[0].data.push(count);
        });
      }
    }

    setChartData(chartDataObj);
  }, [comments]);

  return (
    <div className="chartDiv">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
