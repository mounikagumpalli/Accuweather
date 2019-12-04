import React from 'react'

const Weather= ({data}) => (
    <div className="weather_container">
        <div className="text_container">
        {
            data.city && data.country  && <p>Location: {data.city},{data.country}</p>
        
        }

        {
            data.description  && <p>Description: {data.description}</p> 
        
        }
        {
            data.temperature  && <p>Temperature: {data.temperature} F</p> 
        
        }
        {
            data.humidity  && <p>Humidity: {data.humidity}</p> 
        
        }
        {
            data.error  && <p>{data.error}</p> 
        
        }
        </div>
    </div>
   
);

export default Weather
