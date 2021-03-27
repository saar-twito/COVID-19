import React, { useEffect, useContext } from "react";
import Header from "../Header/Header";
import Global from "../Charts/Global/Global";
import Country from "../Charts/Country/Country";
import Footer from "../Footer/Footer";

import { getInfoAbout } from "../RapidApis/Get";
import { CoronaContext } from "../UseContext/Corona";

const MainInfo = () => {
  const [state, setState] = useContext(CoronaContext);

  useEffect(() => {
     getInfoAbout(setState, state, "totals", "globalNews");
  }, []);

  useEffect(() => {
     getInfoAbout(setState, state, "country", "countryNews");
  }, [state.showCountryNameFromButton]);

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
