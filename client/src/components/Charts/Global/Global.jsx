import React from "react";
import GlobeDoughnut from "./GlobeDoughnut";

const Global = ({ info }) => {
  return (
    <div className="row mt-5">
      <div
        className="col-sm-12 col-md-6 col-lg-6 mt-5"
        style={{ textAlign: "justify" }}
      >
        <h1>Covid-19 around the world</h1>
        <p>
          The Covid-19 pandemic has reached almost every country in the world.
          Its spread has left national economies and businesses counting the
          costs, as governments struggle with new lockdown measures to tackle
          the spread of the virus. Despite the development of new vaccines, many
          are still wondering what recovery could look like.
          <br />
          <strong>In the diagram on the right</strong>, you can see the data on
          the state of the corona in the world.
        </p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
        <GlobeDoughnut info={info} />
      </div>
    </div>
  );
};

export default Global;
