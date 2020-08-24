import React from 'react';

const PersonForm = (props) => {
  const {
    handleSubmitEvent,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;

  return(
    <form onSubmit={handleSubmitEvent}>
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
  )
}

export default PersonForm;
