import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const personData = response.data;
        setPersons(personData);
      })
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    }
    setNewName('');
    setNewNumber('');

    const found = persons.find(person =>
      person.name === personObject.name
    );

    if (found) {
      window.alert(`${found.name} is already added to phonebook!`);

      return;
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
      })
  }

  const filteredPersons = (newFilter !== '')
    ? persons.filter(person =>
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )
    : persons;

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter}
              handleFilterChange={handleFilterChange}
      />

      <h3>Add a new contact</h3>

      <PersonForm addPerson={addPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Numbers filteredPersons={filteredPersons}/>
    </div>
  );
}

export default App;
