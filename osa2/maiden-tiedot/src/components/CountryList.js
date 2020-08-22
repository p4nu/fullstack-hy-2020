import React from 'react';
import CountryInformation from './CountryInformation';

const CountryList = ({filteredCountries}) => {
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

export default CountryList;
