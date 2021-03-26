import React from "react";
import GlobeDoughnut from "./GlobeDoughnut";
import Layout from "../../Layout/Layout";

// * Style
import classes from "./style.module.css";

const Global = ({ info }) => (
  <div className="row mt-5">
    <Layout>
      <h1 className={classes.Header}>Covid-19 around the world</h1>
      <p className={classes.Description}>
        The Covid-19 pandemic has reached almost every country in the world.
        spread has left national economies and businesses counting the as
        governments struggle with new lockdown measures to tackle ad of the
        virus.Despite the development of new vaccines, many are still wondering
        what recovery could look like.
        <br />
        <strong>In the diagram on the right</strong>, you can see the data on
        the state of the corona in the world.
      </p>
    </Layout>
    <Layout>
      <GlobeDoughnut info={info} />
    </Layout>
  </div>
);

export default Global;
