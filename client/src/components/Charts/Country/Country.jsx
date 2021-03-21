import React from "react";
import CountryDoughnut from "./CountryDoughnut";

const Country = ({
  countryName,
  countryNews,
  getUserInput,
  showCountryName,
  showCountryNameFromButton,
}) => {
  const SearchButtonStyle = {
    marginLeft: "1rem",
    marginLeft: "1rem",
    color: "white",
    fontWeight: "500",
    fontSize: "1.1rem",
  };
  return (
    <div className="row mt-5">
      <div
        className="col-sm-12 col-md-6 col-lg-6 mt-5"
        style={{ textAlign: "justify" }}
      >
        <h1>Covid-19 in a specific country</h1>
        <p>
          Some countries have managed to deal in different ways in relation to
          each other, some better and some less well.
          <br />
          <strong>In the diagram to your right</strong>, you can see different
          data about countries of your choice.
        </p>
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
        <input
          type="text"
          value={countryName}
          placeholder="Search by a country name"
          style={{ width: "15rem" }}
          onChange={getUserInput}
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          style={SearchButtonStyle}
          onClick={showCountryName}
        >
          Search
        </button>
        <CountryDoughnut
          countryNews={countryNews}
          countryName={showCountryNameFromButton}
        />
      </div>
    </div>
  );
};

export default Country;
