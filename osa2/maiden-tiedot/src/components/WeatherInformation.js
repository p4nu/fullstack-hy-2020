import React from 'react';

const WeatherInformation = ({country, weatherInfo}) => {
  if (weatherInfo.main) {
    return (
      <div>
        <h3>Weather in {country.capital}</h3>

        <p>
          <strong>Temperature:</strong> {weatherInfo.main.temp} Celcius
        </p>

        <img src={'http://openweathermap.org/img/wn/' + weatherInfo.weather[0].icon + '@4x.png'}
             alt={weatherInfo.weather[0].description}
             width='125px'
        />

        <p>
          <strong>Wind:</strong> {weatherInfo.wind.speed} meters per second, direction {weatherInfo.wind.deg} degrees.
        </p>
      </div>
    )
  }

  return <div>Weather information not found!</div>
}

export default WeatherInformation;
