import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { BsCheck } from 'react-icons/bs';

const RemindersList = ({
  list,
  addListClicked,
  isAddingList,
  createList,
  newListName,
  changeName,
}) => {
  return (
    <div className='reminders-list'>
      <ul>
        {list.map((listItem, index) => {
          return (
            <li key={index}>
              <Link to={`${listItem}`}>{listItem}</Link>
            </li>
          );
        })}
        {isAddingList && (
          <form onSubmit={createList} className='new-list'>
            <input
              autoFocus
              type='text'
              value={newListName}
              onChange={changeName}
              placeholder='Add new list...'
            />
            {/* <button type='submit' className='new-list__button'>
              <BsCheck />
            </button> */}
          </form>
        )}
      </ul>
      <button onClick={addListClicked}>
        Add list <FaPlusCircle />
      </button>
    </div>
  );
};

export default RemindersList;
