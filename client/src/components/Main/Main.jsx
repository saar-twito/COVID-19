import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CoronaContext } from "../UseContext/Corona";

import Header from "../Header/Header";
import Global from "../Charts/Global/Global";
import Country from "../Charts/Country/Country";
import Footer from "../Footer/Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainInfo = () => {
  const [state, setState] = useContext(CoronaContext);

  useEffect(() => {
    getGlobalTotalNews();
  }, []);

  useEffect(() => {
    getCountryTotalNews();
  }, [state.showCountryNameFromButton]);

  const getGlobalTotalNews = async () => {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/totals",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      setState((prevState) => ({ ...prevState, globalNews: data }));
    } catch (error) {
      toast.error(error);
    }
  };

  const getCountryTotalNews = async () => {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      params: { name: state.showCountryNameFromButton },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      setState((prevState) => ({ ...prevState, countryNews: data }));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <main>
      <Header />
      <div className="container">
        <Global info={state.globalNews} />
        <Country
          countryName={state.countryName}
          countryNews={state.countryNews}
          getUserInput={(e) =>
            setState((prevState) => ({
              ...prevState,
              countryName: e.target.value,
            }))
          }
          showCountryName={() =>
            setState((prevState) => ({
              ...prevState,
              showCountryNameFromButton: state.countryName,
            }))
          }
          showCountryNameFromButton={state.showCountryNameFromButton}
        />
      </div>
      <Footer />
    </main>
  );
};

export default MainInfo;
