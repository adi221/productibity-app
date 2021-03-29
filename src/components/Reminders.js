import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Reminders = ({ items }) => {
  return (
    <main className='reminders'>
      <div className='reminders-header'>
        <h1>Reminders</h1>
        <FaPlus />
      </div>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </main>
  );
};

export default Reminders;
