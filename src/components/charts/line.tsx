import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
interface IProps {
  title: string;
  metricsData: any[];
}
export default function LineChart({ title, metricsData }: IProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Energia Gerada",
        data: metricsData.map((item) =>
          parseInt(String(item?.energy_send_unit).replace(".", ""), 10)
        ),
        borderColor: "rgb(60, 179, 113)",
        backgroundColor: "rgba(60, 179, 113, 0.5)",
        yAxisID: "y1",
      },
      {
        label: "Energia Consumida",
        data: metricsData.map((item) =>
          parseInt(String(item?.energy_unit).replace(".", ""), 10)
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
  return (
    <>
      <div className="p-6 w-[500px] h-[300px]   bg-white  rounded-3xl shadow-lg">
        <Line options={options} data={data} />
      </div>
    </>
  );
}
