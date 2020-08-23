import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const App = () => {
  const apikey = process.env.REACT_APP_API_KEY;

  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(result => setCountries(result.data))
  }, []);

  // Monthly usage limit has been reached for me, because I
  // forgot to add the deps array which resulted to
  // endless api calls.
  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {
        params: {
          access_key: apikey,
          query: 'London, United Kingdom'
        },
      })
      .then(result => {
        console.log(result.data);
      });
  }, [apikey]);

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
      />
    </div>
  );
}

export default App;
