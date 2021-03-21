import React from "react";
import { Doughnut } from "react-chartjs-2";

const GlobeDoughnut = ({ info }) => {
  if (info.length === 0) return <h2>No data is available</h2>;

  const keys = Object.keys(info[0]).slice(0, 4);
  const values = Object.values(info[0]).slice(0, 4);
  return (
    <Doughnut
      data={{
        labels: keys,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "rgba(255, 8, 0, 0.8)",
              "rgba(0, 159, 107, 0.8)",
              "rgba(119, 136, 153, 0.8)",
              "rgba(16, 12, 8, 0.8)",
            ],
          },
        ],
      }}
      height={300}
      width={300}
      options={{
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontSize: 20,
          },
        },
      }}
    />
  );
};

export default GlobeDoughnut;
