import axios from "axios";

const API = "https://covid-19-data.p.rapidapi.com/country";

export const fetchData = async (query) => {
  const { data } = await axios.get(API, {
    params: {
      name: query,
    },
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "a680d82495msh2d9595a30009806p1777e0jsn38510f87b6fb",
    },
  }); 
  return data[0];
};
