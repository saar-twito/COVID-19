// From here everything begin with our data.
// This is the "base" of our data app.

import React, { useState, createContext } from "react";

// * createContext
export const CoronaContext = createContext();

// * Provider
export const CoronaProvider = (props) => {
  const [state, setState] = useState({
    globalNews: [],
    countryNews: [],
    countryName: "",
    showCountryNameFromButton: "",
  });
  return (
    <CoronaContext.Provider value={[state, setState]}>
      {props.children}
    </CoronaContext.Provider>
  );
};

export default CoronaProvider;

// We export both of them because other component will need to get an access
// to my data..
