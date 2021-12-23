import React from "react";
import { Chart } from "react-google-charts";
const PieChart = ({recoverd,confirmed,deaths,critical}) => {
    
  return (
    <div className="pi-chart">
      <Chart 
        chartType="Bar"
        className="chart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Task', 'Report'],
            ['Confirmed', confirmed],
            ['Recoverd', recoverd],
            ['Deaths', deaths],
            ['Critical', critical],
          ]}
         
        options={{
          title: "Covid-19 Report",
          backgroundColor:'transparent',
          colors:['#ff8b03','#0041ff','#cd3b26']
          
        }}
        
      />
    </div>
  );
};

export default PieChart;
