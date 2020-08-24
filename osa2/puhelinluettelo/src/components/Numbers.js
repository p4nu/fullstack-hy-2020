import React from 'react';

const Numbers = ({filteredPersons, deletePerson}) => (
  filteredPersons.map(person =>
    <div key={person.name}>
      {person.name} {person.number}

      <button onClick={() => deletePerson(person)}>Delete</button>
    </div>
  )
);

export default Numbers;
