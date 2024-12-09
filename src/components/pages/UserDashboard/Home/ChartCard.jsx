import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaArrowUp, FaArrowDown, FaSquare } from "react-icons/fa";

const ChartCard = ({ chartId, mainValue, mainText, trendText, trendIcon, legend }) => {
  const chartRef = useRef(null); // For canvas reference
  const chartInstance = useRef(null); // To store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Visitors",
            data: [120, 190, 300, 500, 200, 300, 400],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Hide default legend
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="d-flex">
        <p className="d-flex flex-column">
          <span className="text-bold text-lg">{mainValue}</span>
          <span>{mainText}</span>
        </p>
        <p className="ml-auto d-flex flex-column text-right">
          <span className={`text-${trendIcon.color}`}>
            {trendIcon.direction === "up" ? <FaArrowUp /> : <FaArrowDown />} {trendText}
          </span>
          <span className="text-muted">Since last week</span>
        </p>
      </div>
      <div className="position-relative mb-4">
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <canvas id={chartId} ref={chartRef} height="200"></canvas>
      </div>
      <div className="d-flex flex-row justify-content-end">
        {legend.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <span className="mr-2" key={index}>
            <FaSquare className={`text-${item.color}`} /> {item.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default ChartCard;
