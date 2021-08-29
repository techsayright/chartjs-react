import React from "react";
import { Bar } from "react-chartjs-2";

export const ChartBar = () => {
  let data = {
    labels: [2016, 2017, 2018, 2019, 2020],
    datasets: [
      {
        label: "Income",
        data: [200000, 1500000, 1679843, 1200000, 1428422],
        backgroundColor: [
          "rgba(285, 96, 532, 0.8)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 250,
        // hoverBackgroundColor: "yellow"
        hoverBackgroundColor: ["yellow", "red", "blue", "orange", "pink"],
      },
      {
        label: "Income-2",
        data: [234343, 150030, 162798, 120200, 142824],
        backgroundColor: [
          "rgba(256, 99, 132, 0.2)",
          "rgba(54, 164, 235, 0.2)",
          "rgba(255, 246, 86, 0.2)",
          "rgba(77, 192, 192, 0.2)",
          "rgba(153, 102, 265, 0.2)",
          "rgba(255, 159, 622, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 133, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 236, 86, 1)",
          "rgba(75, 195, 192, 1)",
          "rgba(153, 122, 255, 1)",
          "rgba(255, 139, 64, 1)",
        ],
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 100,
        hoverBackgroundColor: "yellow"
      },
    ],
  };

  let options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    //   legend: {
    //     position: "bottom",
    //     display: true,
    //   },
    // },
    maintainAspectRatio: false,
    // indexAxis: "y"
  };

  return (
    <div>
      <Bar data={data} options={options} height={400} width={500} />
    </div>
  );
};
