import React, {useEffect, useState} from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Numbers from './components/Numbers';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
  }, []);

  const resetFormFields = () => {
    setNewName('');
    setNewNumber('');
  }

  const addPerson = (newPerson) => {
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        resetFormFields();

        setIsError(false);
        setMessage(`${returnedPerson.name} added!`);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch(error => {
        setIsError(true);
        setMessage(error.response.data.error);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
  }

  const editPerson = (oldPersonData, newPersonData) => {
    personService
      .edit(oldPersonData.id, newPersonData)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== oldPersonData.id
          ? person
          : returnedPerson
        ));
        resetFormFields();

        setIsError(false);
        setMessage(`${returnedPerson.name} edited!`);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch(error => {
        setIsError(true);
        setMessage(`${oldPersonData.name} has already been removed from the server! More info: ${error}`);

        setTimeout(() => {
          setMessage(null);
        }, 5000)
      })
  }

  const handleSubmitEvent = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const foundPerson = persons.find(person =>
      person.name === newPerson.name
    );

    if (foundPerson) {
      if (window.confirm(
        `${foundPerson.name} is already added to phonebook. Replace the old number with a new one?`
      )) {
        editPerson(foundPerson, newPerson);
      }

      return;
    }

    addPerson(newPerson);
  }

  const deletePerson = deletablePerson => {
    if (!window.confirm(`Delete ${deletablePerson.name}?`)) return;

    personService
      .remove(deletablePerson.id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== deletablePerson.id));
        setIsError(false);
        setMessage(`${deletablePerson.name} deleted!`);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch(error => {
        setIsError(true);
        setMessage(`${deletablePerson.name} has already been removed from the server! More info: ${error}`);

        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
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

      <Notification message={message}
                    isError={isError}
      />

      <Filter newFilter={newFilter}
              handleFilterChange={handleFilterChange}
      />

      <h3>Add a new contact</h3>

      <PersonForm handleSubmitEvent={handleSubmitEvent}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Numbers filteredPersons={filteredPersons}
               deletePerson={deletePerson}
      />
    </div>
  );
}

export default App;
