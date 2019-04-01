import React from 'react'
import { Bar } from 'react-chartjs-2'
const divStyleC = {
    textAlign:'center'
};
const divStyleC2 = {
    width:'500px',
    height:'400px',
    textAlign:'center'

};
const Chart = props =>(
    <div className="chart" style={divStyleC}>
        <br/><br/>
        { props.chartDataTemp && <h2>Last Seven Days Record</h2>}
        <br/><br/>

        <p>
            <div style={divStyleC2}>
                { props.chartDataTemp && <Bar data={props.chartDataTemp}/> }
            </div>
            <div style={divStyleC2}>
                { props.chartDataHum && <Bar data={props.chartDataHum}/> }
            </div>
            <div style={divStyleC2}>
                { props.chartDataPerc && <Bar data={props.chartDataPerc}/> }
            </div>
        </p>
    </div>
);

export default Chart;