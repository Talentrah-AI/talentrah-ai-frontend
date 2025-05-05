"use client";

import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ data }) {
  const chartData = {
    labels: data.labels, // e.g., ["Mon", "Tue", "Wed", ...]
    datasets: [
      {
        label: "Paid candidates",
        data: data.paid, // e.g., [100, 500, 800, ...]
        borderColor: "#3B82F6", // Tailwind Blue-500
        backgroundColor: "#3B82F6",
        fill: false,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Free candidates",
        data: data.free,
        borderColor: "#EA580C", // Tailwind Orange-500
        backgroundColor: "#EA580C",
        fill: false,
        pointBackgroundColor: "#EA580C",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#111827", // optional: for dark tooltip
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0,
      },
      point: {
        radius: 1,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: { display: false,
          drawBorder: false,
          drawTicks: false,
         },
        ticks: {
          font: { size: 14, weight: "500" },
          color: "#6B7280",
        },
        border: {
          display: false, // removes the axis line
        },
      },
      y: {
        grid: { display: false,
          drawBorder: false,
          drawTicks: false,
        },
        beginAtZero: true,
        max: 2500,
        border: {
          display: false, // removes the axis line
        },
      },
    },
  };
  

  return <Line data={chartData} options={options} />;
}

export function PieChart({ data }) {
  const total = data.premium + data.freemium;

  const chartData = {
    labels: ["Premium candidates", "Freemium candidates"],
    datasets: [
      {
        data: [data.premium, data.freemium],
        backgroundColor: ["#3B82F6", "#2DD4BF"],
        borderWidth: 0,
        cutout: "80%", // Makes it a donut
        borderRadius: 0, // Rounds edges
        spacing: 0, // Adds space between slices
      },
    ],
  };

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111827",
      titleFont: { size: 0 },
      bodyFont: { size: 14 },
      bodyColor: "#ffffff",
      displayColors: true,
      cornerRadius: 8,
      padding: 10,
      callbacks: {
        label: function (context) {
          const label = context.label || "";
          const value = context.raw || 0;
          return `${value.toLocaleString()} ${label}`;
        },
      },
    },
  },
};


  return (
    <div className="relative w-[300px] h-[300px]">
      <Doughnut data={chartData} options={options} />
      </div>
  );
}
