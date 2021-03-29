import React, { useState } from 'react';
import Reminders from '../components/Reminders';
import RemindersList from '../components/RemindersList';
import { useParams } from 'react-router-dom';

const RemindersPage = () => {
  const [lists, setLists] = useState({
    All: [
      'Clean the house',
      'Review Coding',
      'Do some sports',
      'Cook food',
      'Go to hospital',
    ],
    Work: ['Review Coding', 'Do some sports'],
    Home: ['Clean the house', 'Cook food'],
    Volunteering: ['Go to hospital'],
  });
  const { id } = useParams();
  console.log(id);

  const remindersList = Object.keys(lists);
  const reminders = id ? lists[id] : lists['All'];

  return (
    <div className='reminders-container'>
      <RemindersList list={remindersList} />
      <Reminders items={reminders} />
    </div>
  );
};

export default RemindersPage;
