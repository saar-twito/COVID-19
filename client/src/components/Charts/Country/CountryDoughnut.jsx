import React from "react";
import { Doughnut } from "react-chartjs-2";

const CountryDoughnut = ({ countryNews, countryName }) => {
  if (countryNews.length === 0) return null;

  const keys = Object.keys(countryNews[0]).slice(2, 6);
  const values = Object.values(countryNews[0]).slice(2, 6);
  countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1);

  return (
    <React.Fragment>
      <h1>Total in {countryName}</h1>
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
        height={100}
        width={100}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 20,
            },
          },
        }}
      />
    </React.Fragment>
  );
};

export default CountryDoughnut;
