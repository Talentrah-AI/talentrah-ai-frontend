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
        borderWidth: 2,
        tension: 0,
      },
      point: {
        radius: 5,
        borderWidth: 2,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 14, weight: "500" },
          color: "#6B7280",
        },
      },
      y: {
        grid: {
          color: "#E5E7EB",
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          stepSize: 500,
          font: { size: 14, weight: "500" },
          color: "#6B7280",
          padding: 8,
        },
        beginAtZero: true,
        max: 2500,
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
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${value.toLocaleString()} ${label}`;
          },
        },
        backgroundColor: "#111827",
        titleFont: { size: 0 },
        bodyFont: { size: 14 },
        displayColors: true,
        padding: 10,
        cornerRadius: 6,
      },
      
    },
  };

  return (
    <div className="relative w-[300px] h-[300px]">
      <Doughnut data={chartData} options={options} />
      </div>
  );
}
