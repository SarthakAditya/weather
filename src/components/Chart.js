import React from 'react'
import { Bar } from 'react-chartjs-2'
const divStyleC = {
    width:'500px',
    height:'400px',
    align:'center'
};
const Chart = props =>(
    <div className="chart" style={divStyleC}>
        { props.chartDataTemp && <Bar data={props.chartDataTemp}/> }
        { props.chartDataHum && <Bar data={props.chartDataHum}/> }
        { props.chartDataPerc && <Bar data={props.chartDataPerc}/> }
    </div>
);

export default Chart;