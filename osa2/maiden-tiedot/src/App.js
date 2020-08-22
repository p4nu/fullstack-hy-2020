import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(result => setCountries(result.data))
  });

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
