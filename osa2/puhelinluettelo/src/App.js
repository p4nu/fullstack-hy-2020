import React, {useState} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244',
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523',
    },
    {
      name: 'Dan Abramov',
      number: '12-43-234345',
    },
    {
      name: 'Mary Poppendieck',
      number: '39-23-6423122',
    },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

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
    setPersons(persons.concat(personObject));
  }

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

      <Numbers persons={persons}
               newFilter={newFilter}
      />
    </div>
  );
}

export default App;
