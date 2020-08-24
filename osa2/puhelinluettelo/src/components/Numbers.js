import React from 'react';

const Numbers = ({filteredPersons, removePerson}) => (
  filteredPersons.map(person =>
    <div key={person.name}>
      {person.name} {person.number}

      <button onClick={() => removePerson(person)}>Delete</button>
    </div>
  )
);

export default Numbers;
