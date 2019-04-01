import React, { Component } from 'react'
import Titles from './components/Titles'
import From from  './components/Form'
import Wearher from './components/Weather'

const API_KEY="8471d14a7f834e1595840614190104";

class App extends Component {
  state={
    temp:undefined,
    city:undefined,
    country:undefined,
    prec:undefined,
    humidity:undefined,
    error:undefined

  };
  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if (city && country)
    {
      const api_call= await fetch(`http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        temp: data.current.temp_c,
        city: data.location.name,
        country:data.location.country,
        prec:data.current.precip_mm,
        humidity:data.current.humidity,
        error: ""
      })
    }
    else
    {
      this.setState({error: "Please Enter Correct Details"})
    }

  };
  render() {
    return (
        <div>
          <Titles/>
          <From getWeather={this.getWeather}/>
          <Wearher
            temperature={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            precipitation={this.state.prec}
            humidity={this.state.humidity}
            error={this.state.error}
          />
        </div>
    );
  }

}

export default App;