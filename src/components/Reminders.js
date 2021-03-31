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
  deleteList,
  removeReminder,
}) => {
  return (
    <main className='reminders'>
      <div className='reminders-header'>
        <h1>{name === 'All' || !name ? 'Reminders' : name}</h1>
        {name === 'All' || name === undefined || (
          <button onClick={addReminderClicked}>
            <FaPlus />
          </button>
        )}
      </div>
      <ul>
        {items.length === 0 && !isAddingReminder && (
          <h4>Add Reminders To List</h4>
        )}
        {items.map(item => {
          return (
            <SingleReminder
              key={item.id}
              name={name}
              item={item}
              removeReminder={() => removeReminder(item.id)}
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
      {name === 'Work' ||
        name === 'All' ||
        name === 'Home' ||
        name === undefined || (
          <button className='delete-list' onClick={deleteList}>
            Delete list
          </button>
        )}
    </main>
  );
};

export default Reminders;
