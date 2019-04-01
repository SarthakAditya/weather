import React, { Component } from 'react'
import Titles from './components/Titles'
import From from  './components/Form'
import Wearher from './components/Weather'
import Chart from './components/Chart'
import Table from  './components/Table'

const API_KEY="8471d14a7f834e1595840614190104";

class App extends Component {
  state={
    temp:[undefined],
    city:undefined,
    country:undefined,
    prec:[undefined],
    humidity:[undefined],
    date:[undefined],
    chartDataTemp:undefined,
    chartDataHum:undefined,
    chartDataPerc:undefined,
    forcasrData:undefined,
    error:undefined

  };


    getWeather = async (e) => {
    e.preventDefault();
    this.setState(
        {
          temp: [],
          city: undefined,
          country: undefined,
          prec: [],
          humidity: [],
          date: [],
          chartDataTemp: undefined,
          chartDataHum: undefined,
          chartDataPerc: undefined,
          forcasrData: undefined,
          error: undefined
        }
    );
    const city=e.target.elements.city.value;
    var days7 = new Array(0);
    var dd=new Date();
    dd.setDate(dd.getDate()-7);
    if (city)
    {
      const api_call= await fetch(`http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=4`);
      const data=await api_call.json();
      console.log(data);
      this.setState({
        temp: [...this.state.temp, data.current.temp_c],
        city: data.location.name,
        country:data.location.country,
        prec:[...this.state.prec, data.current.precip_mm],
        humidity:[...this.state.humidity, data.current.humidity],
        date: [...this.state.date, data.current.last_updated],
        error: ""
      });
      var i;
      var j=0;
      for (i=7;i>0;i--) {
        var dt = formatDate(dd);
        var api_call2 = await fetch(`http://api.apixu.com/v1/history.json?key=${API_KEY}&q=${city}&dt=${dt}`);
        days7.push(await api_call2.json());
        dd.setDate(dd.getDate()+1);
        this.setState({
          temp:[...this.state.temp, days7[j].forecast.forecastday[0].day.avgtemp_c],
          prec:[...this.state.prec, days7[j].forecast.forecastday[0].day.totalprecip_mm],
          humidity:[...this.state.humidity, days7[j].forecast.forecastday[0].day.avghumidity],
          date:[...this.state.date, days7[j].forecast.forecastday[0].date],
        });
        j++;
      }
      var Tchardatatemp={
        labels: [this.state.date[2], this.state.date[3], this.state.date[4], this.state.date[5], this.state.date[6], this.state.date[7], this.state.date[8]],
        datasets: [
          {
            label: 'Temperature',
            data: [this.state.temp[2], this.state.temp[3], this.state.temp[4], this.state.temp[5], this.state.temp[6], this.state.temp[7], this.state.temp[8]],
            backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(255, 255, 0)',
              'rgb(255, 0, 255)',
              'rgb(0, 255, 0)',
              'rgb(0, 0, 255)',
              'rgb(255, 0, 0)',
              'rgb(0, 0, 255)'
            ]

          }
        ]
      };

      var Tchardatahum={
        labels: [this.state.date[2], this.state.date[3], this.state.date[4], this.state.date[5], this.state.date[6], this.state.date[7], this.state.date[8]],
        datasets: [
          {
            label: 'Humidity',
            data: [this.state.humidity[2], this.state.humidity[3], this.state.humidity[4], this.state.humidity[5], this.state.humidity[6], this.state.humidity[7], this.state.humidity[8]],
            backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(255, 255, 0)',
              'rgb(255, 0, 255)',
              'rgb(0, 255, 0)',
              'rgb(0, 0, 255)',
              'rgb(255, 0, 0)',
              'rgb(0, 0, 255)'
            ]

          }
        ]
      };

      var Tchardataperc={
        labels: [this.state.date[2], this.state.date[3], this.state.date[4], this.state.date[5], this.state.date[6], this.state.date[7], this.state.date[8]],
        datasets: [
          {
            label: 'Precipitation',
            data: [this.state.prec[2], this.state.prec[3], this.state.prec[4], this.state.prec[5], this.state.prec[6], this.state.prec[7], this.state.prec[8]],
            backgroundColor: [
              'rgb(255, 191, 0)',
              'rgb(128, 255, 0)',
              'rgb(0, 255, 191)',
              'rgb(0, 128, 255)',
              'rgb(191, 0, 255)',
              'rgb(255, 0, 128)',
              'rgb(255, 0, 0)'
            ]

          }
        ]
      };

      var TforcastData={
        dates:[data.forecast.forecastday[0].date,data.forecast.forecastday[1].date,data.forecast.forecastday[2].date,data.forecast.forecastday[3].date],
        temps:[data.forecast.forecastday[0].day.avgtemp_c,data.forecast.forecastday[1].day.avgtemp_c,data.forecast.forecastday[2].day.avgtemp_c,data.forecast.forecastday[3].day.avgtemp_c],
        hums:[data.forecast.forecastday[0].day.avghumidity,data.forecast.forecastday[1].day.avghumidity,data.forecast.forecastday[2].day.avghumidity,data.forecast.forecastday[3].day.avghumidity],
        percs:[data.forecast.forecastday[0].day.totalprecip_mm,data.forecast.forecastday[1].day.totalprecip_mm,data.forecast.forecastday[2].day.totalprecip_mm,data.forecast.forecastday[3].day.totalprecip_mm],
      };

      this.setState(
          {
            forcasrData:TforcastData,
            chartDataTemp:Tchardatatemp,
            chartDataHum:Tchardatahum,
            chartDataPerc:Tchardataperc
          }
      )

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
          <Table forcasrData={this.state.forcasrData}/>
          <Chart
            chartDataTemp={this.state.chartDataTemp}
            chartDataHum={this.state.chartDataHum}
            chartDataPerc={this.state.chartDataPerc}
          />
        </div>
    );
  }

}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export default App;