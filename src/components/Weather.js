import React from "react"
const divStyle = {
    width:'100%',
    textAlign:'center',
    fontsize:'200%'

};

const Weather = props => (
    <div style={divStyle}>
        <br/><br/>
        { props.city && props.country && <p><h2>Location : {props.city} , {props.country}</h2></p> }
        { props.error && <p>{props.error}</p> }
    </div>
);

export default Weather