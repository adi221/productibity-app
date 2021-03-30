import React from 'react';
import { FaPlus } from 'react-icons/fa';
import SingleReminder from './SingleReminder';

const Reminders = ({
  items = [],
  name,
  isAddingReminder,
  createReminder,
  addReminderClicked,
  newReminderName,
  changeName,
  removeReminder,
}) => {
  return (
    <main className='reminders'>
      <div className='reminders-header'>
        <h1>{name === 'All' || !name ? 'Reminders' : name}</h1>
        <button onClick={addReminderClicked}>
          <FaPlus />
        </button>
      </div>
      <ul>
        {items.length === 0 && !isAddingReminder && (
          <h4>Add Reminders To List</h4>
        )}
        {items.map((item, index) => {
          return (
            <SingleReminder
              key={index}
              item={item}
              removeReminder={index => removeReminder(index)}
            />
          );
        })}
        {isAddingReminder && (
          <form onSubmit={createReminder} className='new-reminder'>
            <input
              type='text'
              placeholder='Add new reminder'
              autoFocus
              value={newReminderName}
              onChange={changeName}
            />
          </form>
        )}
      </ul>
    </main>
  );
};

export default Reminders;
