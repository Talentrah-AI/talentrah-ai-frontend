"use client";

import { Line, Pie } from "react-chartjs-2";
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
        tension: 0.4, // smooth curves
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
        tension: 0.4, // smooth curves
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
      legend: {
        display: false, // You control the legend outside
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#6B7280", // Tailwind Gray-500
        },
      },
      y: {
        grid: {
          color: "#E5E7EB", // Light gray grid lines
          drawBorder: false,
        },
        ticks: {
          stepSize: 500,
          font: {
            size: 14,
          },
          color: "#6B7280",
        },
        beginAtZero: true,
        max: 2500,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export function PieChart({ data }) {
  const chartData = {
    labels: ["Premium candidates", "Freemium candidates"],
    datasets: [
      {
        data: [data.premium, data.freemium], // e.g., [2000, 3532]
        backgroundColor: ["#3B82F6", "#2DD4BF"], // Blue and Teal
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}
