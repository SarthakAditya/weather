import React from "react"
const divstyle={
    textAlign:'center',
    size:'100%'

}
const From = props => (
    <form onSubmit={props.getWeather} style={divstyle}>
        <input type="text" name="city" placeholder="Place.."/>
        <button>Get Weather</button>
    </form>
);

export default From