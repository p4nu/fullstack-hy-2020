import React from 'react';
import CountryInformation from './CountryInformation';

const CountryList = ({filteredCountries, setNewFilter, setCapitalCity, weatherInfo}) => {
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
          <div key={country.name}>
            {country.name}

            <button onClick={() => setNewFilter(country.name)}>Show</button>
          </div>
        )}
      </div>
    )
  } else if (filteredCountries[0]) {
    return (
      <CountryInformation country={filteredCountries[0]}
                          setCapitalCity={setCapitalCity}
                          weatherInfo={weatherInfo}
      />
    );
  }

  return <div>No countries found!</div>
};

export default CountryList;
