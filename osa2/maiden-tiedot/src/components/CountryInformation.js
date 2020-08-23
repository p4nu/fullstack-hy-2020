import React, {useEffect} from 'react';
import WeatherInformation from './WeatherInformation';

const CountryInformation = ({country, setCapitalCity, weatherInfo}) => {
  useEffect(() => {
    setCapitalCity(country.capital);
  }, [country.capital, setCapitalCity]);

  return (
    <div>
      <h2>{country.name}</h2>

      <p>Capital: {country.capital}</p>

      <p>Population: {country.population}</p>

      <h3>Languages</h3>

      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>

      <img src={country.flag} alt="Country flag" width="150px"/>

      <WeatherInformation country={country}
                          weatherInfo={weatherInfo}
      />
    </div>
  );
}

export default CountryInformation;
