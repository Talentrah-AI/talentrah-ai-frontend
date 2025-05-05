"use client";

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
import { Line, Doughnut } from "react-chartjs-2";

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

// LINE CHART COMPONENT
export function LineChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Paid candidates",
        data: data.paid,
        borderColor: "#3B82F6",
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
        borderColor: "#EA580C",
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
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
      },
    },
    elements: {
      line: { borderWidth: 1, tension: 0 },
      point: { radius: 1, borderWidth: 1 },
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false, drawTicks: false },
        ticks: {
          font: { size: 14, weight: "500" },
          color: "#6B7280",
        },
        border: { display: false },
      },
      y: {
        grid: { display: false, drawBorder: false, drawTicks: false },
        beginAtZero: true,
        max: 2500,
        border: { display: false },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

// PIE CHART COMPONENT
export function PieChart({ data }) {
  const total = data.premium + data.freemium;

  const chartData = {
    labels: ["Premium candidates", "Freemium candidates"],
    datasets: [
      {
        data: [data.premium, data.freemium],
        backgroundColor: ["#3B82F6", "#2DD4BF"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false, // disable default
        external: function (context) {
          const tooltipModel = context.tooltip;

          let tooltipEl = document.getElementById("custom-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "custom-tooltip";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.transition = "all 0.1s ease";
            tooltipEl.style.zIndex = "100";
            document.body.appendChild(tooltipEl);
          }

          // Hide tooltip if not visible
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          const dataPoint = tooltipModel.dataPoints?.[0];
          const color = dataPoint?.dataset?.backgroundColor?.[dataPoint.dataIndex] || "#ccc";
          const value = dataPoint?.raw?.toLocaleString() || "";
          const label = dataPoint?.label || "";

          tooltipEl.innerHTML = `
            <div style="
              background: #111827;
              color: white;
              padding: 8px 12px;
              border-radius: 8px;
              font-size: 14px;
              display: flex;
              align-items: center;
              box-shadow: 0 2px 10px rgba(0,0,0,0.2);
              position: relative;
            ">
              <span style="width: 8px; height: 8px; background: ${color}; border-radius: 9999px; display: inline-block; margin-right: 8px;"></span>
              ${value} ${label}
              <div style="
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid #111827;
              "></div>
            </div>
          `;

          // Get the mouse position from the event
          const { x, y } = tooltipModel._eventPosition || { x: 0, y: 0 };
          const canvasRect = context.chart.canvas.getBoundingClientRect();

          // Position the tooltip at the mouse coordinates, adjusting for window scroll
          tooltipEl.style.left = `${canvasRect.left + window.scrollX + x}px`;
          tooltipEl.style.top = `${canvasRect.top + window.scrollY + y + 10}px`; // Add a small offset (10px) below the cursor
          tooltipEl.style.opacity = "1";

          // Adjust the tooltip position to center it horizontally relative to the mouse
          const tooltipWidth = tooltipEl.offsetWidth;
          tooltipEl.style.left = `${canvasRect.left + window.scrollX + x - tooltipWidth / 2}px`;
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