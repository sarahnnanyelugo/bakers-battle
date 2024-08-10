import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  labels,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = (data) => ({
  indexAxis: data.align,
  scales: {
    y: { ticks: { display: false } },
    x: { stepSize: 1, grid: { display: false } },
  },
  responsive: true,
  animation: {
    duration: 1000, // Animation duration in milliseconds
    easing: "easeInOutQuad", // Easing function for smooth animation
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "",
    },
    labels: {
      display: true,
      color: "#000", // Color of the labels
      anchor: "end", // Position the label at the end of the bar
      align: "top", // Align the label to the top of the bar
      formatter: (value) => value, // Format the label as the value
      font: {
        weight: "bold", // Make the font bold
      },
      offset: 4, // Space between the label and the top of the bar
    },
  },
});

export function ContestChart({ labels, dataset, drillPage }) {
  const data = {
    labels,
    datasets: [
      {
        label: "votes",
        data: dataset,
        backgroundColor: "rgb(30,61,115)",
        borderRadius: 10,
        aspectRatio: 1,
      },
    ],
  };

  return <Bar options={options(drillPage)} data={data} className="col-12" />;
}
