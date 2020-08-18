import React, {useState} from 'react';

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

  const filteredPersons = (newFilter !== '')
    ? persons.filter(person =>
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Filter shown with
        <input type="text"
               value={newFilter}
               onChange={handleFilterChange}
        />
      </div>

      <form onSubmit={addPerson}>
        <h2>Add a new contact</h2>

        <div>
          Name:
          <input type="text"
                 value={newName}
                 onChange={handleNameChange}
          />
        </div>
        
        <div>
          Number:
          <input type="tel"
                 value={newNumber}
                 onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {filteredPersons.map(person =>
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      )}
    </div>
  );
}

export default App;
