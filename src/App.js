import React, { useState } from "react";
import { fetchData } from "./api/fetchApi";
import PieChart from "./components/PieChart";
import "./App.css";
const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchData(query);
      setData(data);
    }
  }; 
  return (
    <div className="app">
        <div className="container">
      <div className="heading">
        <h1>
          C
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path
              className="a"
              d="M46.5,19A1.49977,1.49977,0,0,0,45,20.5V22H40.87225a16.9,16.9,0,0,0-3.53-8.51367l2.92121-2.92139,1.17582.99561a1.49993,1.49993,0,1,0,2.12134-2.1211l-4.99991-5a1.4999,1.4999,0,0,0-2.12127,2.1211l.99565,1.17578-2.92139,2.92138A16.90205,16.90205,0,0,0,26,7.12793V3h1.5a1.5,1.5,0,0,0,0-3h-7a1.5,1.5,0,0,0,0,3H22V7.12793a16.90205,16.90205,0,0,0-8.51367,3.52978L10.56494,7.73633l.99565-1.17578a1.4999,1.4999,0,0,0-2.12127-2.1211l-4.88475,5a1.49993,1.49993,0,0,0,2.12133,2.1211l1.06067-.99561,2.92121,2.92139A16.9,16.9,0,0,0,7.12775,22H3V20.5a1.5,1.5,0,0,0-3,0v7a1.5,1.5,0,0,0,3,0V26H7.12775a16.9,16.9,0,0,0,3.53,8.51367L7.73657,37.43506l-1.17582-.99561a1.49993,1.49993,0,0,0-2.12134,2.1211l4.99991,5a1.4999,1.4999,0,1,0,2.12127-2.1211l-.99565-1.17578,2.92127-2.92138A16.902,16.902,0,0,0,22,40.87207V45H20.5a1.5,1.5,0,0,0,0,3h7a1.5,1.5,0,0,0,0-3H26V40.87207a16.902,16.902,0,0,0,8.51379-3.52978l2.92127,2.92138-.99565,1.17578a1.4999,1.4999,0,0,0,2.12127,2.1211l4.99991-5a1.49993,1.49993,0,1,0-2.12134-2.1211l-1.17582.99561-2.92121-2.92139A16.9,16.9,0,0,0,40.87225,26H45v1.5a1.5,1.5,0,0,0,3,0v-7A1.49977,1.49977,0,0,0,46.5,19Zm-28,1A3.5,3.5,0,1,1,22,16.5,3.49994,3.49994,0,0,1,18.5,20ZM30,33a2,2,0,1,1,2-2A2.00006,2.00006,0,0,1,30,33Z"
            />
          </svg>
          VID-19
        </h1>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="SearchBox"
          value={query}
          placeholder="Please enter country name"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
      <div className="output">
        {data.country && (
          <div className="covid19-container">
            <div className="country-heading">
              {data.country} Covid-19 report
            </div>
            <div className="confirmed">
              <span className="badge"></span>
              <h2>Confirmed</h2>
              <h3 className="cases">{data.confirmed}</h3>
              <p className="date">{data.lastUpdate.slice(0, 10)}</p>
            </div>
            <div className="recoverd">
              <h2>Recoverd</h2>
              <h3 className="cases">{data.recovered}</h3>
              <p className="date">{data.lastUpdate.slice(0, 10)}</p>
            </div>
            <div className="death">
              <h2>Deaths</h2>
              <h3 className="cases">{data.deaths}</h3>
              <p className="date">{data.lastUpdate.slice(0, 10)}</p>
            </div>
          </div>
        )}
        {data.country && (<PieChart recoverd={data.recovered} deaths={data.deaths} confirmed={data.confirmed} critical={data.critical}/>)}
      </div>
     
    </div>
    </div>
  );
};

export default App;
