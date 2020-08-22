import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CountryInformation = ({country}) => (
  <div>
    <h2>{country.name}</h2>

    <p>Capital: {country.capital}</p>

    <p>Population: {country.population}</p>

    <h3>Languages</h3>

    <ul>
      {country.languages.map(language => (
        <li key={language.name}>{language.name}</li>
      ))}
    </ul>

    <img src={country.flag} alt="Country flag" width="150px"/>
  </div>
)

const ListCountries = ({filteredCountries}) => {
  if (filteredCountries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter.
      </div>
    )
  } else if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map(country =>
          <div key={country.name}>{country.name}</div>
        )}
      </div>
    )
  } else if (filteredCountries[0]) {
    return (
      <CountryInformation country={filteredCountries[0]}/>
    )
  }

  return (
    <div>No countries found!</div>
  )
};

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

      <ListCountries filteredCountries={filteredCountries}/>
    </div>
  );
}

export default App;
