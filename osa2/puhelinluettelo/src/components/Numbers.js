import React from 'react';

const Numbers = ({filteredPersons}) => (
  filteredPersons.map(person =>
    <p key={person.name}>
      {person.name} {person.number}
    </p>
  )
);

export default Numbers;