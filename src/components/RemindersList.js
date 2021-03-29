import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RemindersList = ({ list }) => {
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
      </ul>
      <button>
        Add list <FaPlusCircle />
      </button>
    </div>
  );
};

export default RemindersList;
