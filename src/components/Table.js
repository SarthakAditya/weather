import React from "react"

const divStyle = {
    width:'100%',
    textAlign:'center'
};

const Table = props => (

    <div>
        {props.forcasrData &&
        <table style={divStyle}>
            <tr>
                <th>Date</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Precipitation</th>
            </tr>
            <tr>
                <td><b>{props.forcasrData.dates[0]}</b></td>
                <td><b>{props.forcasrData.temps[0]}</b></td>
                <td><b>{props.forcasrData.hums[0]}</b></td>
                <td><b>{props.forcasrData.percs[0]}</b></td>
            </tr>
            <tr>
                <td>{props.forcasrData.dates[1]}</td>
                <td>{props.forcasrData.temps[1]}</td>
                <td>{props.forcasrData.hums[1]}</td>
                <td>{props.forcasrData.percs[1]}</td>
            </tr>
            <tr>
                <td>{props.forcasrData.dates[2]}</td>
                <td>{props.forcasrData.temps[2]}</td>
                <td>{props.forcasrData.hums[2]}</td>
                <td>{props.forcasrData.percs[2]}</td>
            </tr>
            <tr>
                <td>{props.forcasrData.dates[3]}</td>
                <td>{props.forcasrData.temps[3]}</td>
                <td>{props.forcasrData.hums[3]}</td>
                <td>{props.forcasrData.percs[3]}</td>
            </tr>

        </table>}
    </div>

);
export default Table;