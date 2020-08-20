import React from 'react';

const Numbers = ({persons, newFilter}) => {
  const filteredPersons = (newFilter !== '')
    ? persons.filter(person =>
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )
    : persons;

  return (
    filteredPersons.map(person =>
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    )
  )
}

export default Numbers;
