import React, {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
    }
    setNewName('');

    const found = persons.find(person =>
      person.name === personObject.name
    );

    if (found) {
      window.alert(`${found.name} is already added to phonebook!`);

      return;
    }
    setPersons(persons.concat(personObject));
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Name:
          <input type="text"
                 value={newName}
                 onChange={handleNameChange}
          />
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {persons.map(person =>
        <p key={person.name}>{person.name}</p>
      )}
    </div>
  );
}

export default App;
