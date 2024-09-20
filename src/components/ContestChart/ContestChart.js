import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

export const options = (drillPage, data) => ({
  // indexAxis: "y",
  datalabels: {
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
  },
  onClick: (event, elements) => {
    if (elements.length > 0) {
      const elementIndex = elements[0].index;
      const datasetIndex = elements[0].datasetIndex;
      console.log(`ClickedIndex: ${elementIndex}`);
      // Call the drillPage function here
      drillPage && drillPage(elementIndex);
    }
  },
});

// Function to generate a gradient of colors from dark green to red
function generateColors(numColors) {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const greenToRed = i / (numColors - 1); // Creates a value between 0 (dark green) and 1 (red)
    const red = Math.round(255 * greenToRed); // Red increases as the value increases
    const green = Math.round(100 * (1 - greenToRed)); // Start at 100 for dark green and decrease
    colors.push(`rgb(${red},${green},0)`); // Creates rgb(r,g,0) color
  }
  return colors;
}

export function ContestChart({ labels, dataset, drillPage }) {
  const backgroundColor = generateColors(dataset.length); // Generate colors based on the number of dataset items
  const data = {
    labels,
    datasets: [
      {
        label: "Votes",
        data: dataset,
        backgroundColor: backgroundColor?backgroundColor:"rgb(30,61,115)",
        borderRadius: 20,
        // aspectRatio: 1,
      },
    ],
  };

  return <Bar options={options(drillPage)} data={data} className="col-md-5" />;
}
