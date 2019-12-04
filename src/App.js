import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import Weather from './Weather';
import './Stylesheet.css';
 
export class App extends Component {
  
  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    temperature: undefined,
    humidity: undefined,
    error: undefined
  }

  getWeather = async(e) =>{
    
    e.preventDefault();
   const city = e.target.elements.city.value; 
   const country = e.target.elements.country.value;  
   const API_KEY = '37ac7af7d0006a6f6e5eb3f6d89ef204';
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
   const data = await api_call.json();
   console.log(data)
    if( city && country )
    {
      this.setState({
        city:data.name,
        country:data.sys.country,
        temperature:data.main.temp,
        description:data.weather[0].description,
        humidity:data.main.humidity,
        error:undefined
       },()=>(console.log(this.state)))
    }
   else
   {
    this.setState({
      city: undefined,
      country: undefined,
      description: undefined,
      temperature: undefined,
      humidity: undefined,
      error:"Please enter the values"
     })
   }

   
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">  
                  <Form getWeather={this.getWeather}></Form>
                  <Weather data={this.state} ></Weather>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
