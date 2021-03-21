import React, { useState, useEffect } from "react";
import axios from "axios";

import Intro from "../Intro/Intro";
import Global from "../Charts/Global/Global";
import Country from "../Charts/Country/Country";
import Footer from "../Footer/Footer";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainInfo = () => {
  const [globalNews, setGlobalNews] = useState([]);
  const [countryNews, setCountryNews] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [showCountryNameFromButton, setCountryNameFromButton] = useState("");

  useEffect(() => {
    getGlobalTotalNews();
  }, []);

  useEffect(() => {
    getCountryTotalNews();
  }, [showCountryNameFromButton]);

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
      setGlobalNews(data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getCountryTotalNews = async () => {
    const options = {
      method: "GET",
      url: "https://covid-19-data.p.rapidapi.com/country",
      params: { name: showCountryNameFromButton },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    try {
      const { data } = await axios.request(options);
      setCountryNews(data);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <Intro />
      <div className="container">
        <Global info={globalNews} />
        <Country
          countryName={countryName}
          countryNews={countryNews}
          getUserInput={(e) => setCountryName(e.target.value)}
          showCountryName={() => setCountryNameFromButton(countryName)}
          showCountryNameFromButton={showCountryNameFromButton}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainInfo;
