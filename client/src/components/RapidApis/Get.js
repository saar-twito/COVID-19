import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getInfoAbout = async (setState, state, endpoint, key) => {
    const options = {
        method: "GET",
        url: `https://covid-19-data.p.rapidapi.com/${endpoint}`,
        params: { name: state.showCountryNameFromButton },
        headers: {
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        },
    };

    try {
        const { data } = await axios.request(options);
        setState((prevState) => ({ ...prevState, [key]: data }));
    } catch (error) {
        toast.error(error);
    }
}