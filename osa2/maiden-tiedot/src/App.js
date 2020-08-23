import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;

  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [capitalCity, setCapitalCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(result => setCountries(result.data))
  }, []);

  useEffect(() => {
    if (capitalCity === '') return;

    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: capitalCity,
          units: 'metric',
          appid: apikey,
        },
      })
      .then(result => {
        setWeatherInfo(result.data);
      });
  }, [apikey, capitalCity]);

  const handleSearchInput = event => setNewFilter(event.target.value)

  const filteredCountries = (newFilter !== '')
    ? countries.filter(country =>
      country.name.toLowerCase().includes(newFilter.toLowerCase()))
    : countries;

  return (
    <div>
      Find countries
      <input type="text"
             value={newFilter}
             onChange={handleSearchInput}
      />

      <CountryList filteredCountries={filteredCountries}
                   setNewFilter={setNewFilter}
                   setCapitalCity={setCapitalCity}
                   weatherInfo={weatherInfo}
      />
    </div>
  );
}

export default App;
