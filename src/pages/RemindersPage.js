import React, { useState, useEffect } from 'react';
import Reminders from '../components/Reminders';
import RemindersList from '../components/RemindersList';
import { useParams, useHistory } from 'react-router-dom';

const getLocalStorage = () => {
  let list = localStorage.getItem('reminders');
  if (list) {
    return JSON.parse(localStorage.getItem('reminders'));
  } else {
    // Some boilerplate reminders
    return {
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
    };
  }
};

const RemindersPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [lists, setLists] = useState(getLocalStorage());
  const [isAddingList, setIsAddingList] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [isAddingReminder, setIsAddingReminder] = useState(false);
  const [newReminderName, setNewReminderName] = useState('');

  const remindersList = Object.keys(lists);
  const reminders = id ? lists[id] : lists['All'];

  const createList = e => {
    e.preventDefault();
    setLists({ ...lists, [newListName]: [] });
    history.push(`/${newListName}`);
    setNewListName('');
    setIsAddingList(false);
  };

  const createReminder = e => {
    e.preventDefault();
    setLists({
      ...lists,
      [id]: [...lists[id], newReminderName],
      All: [...lists['All'], newReminderName],
    });
    setNewReminderName('');
    setIsAddingReminder(false);
  };

  const removeReminder = id => {
    console.log('Add', id);
  };

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(lists));
  }, [lists]);

  return (
    <div className='reminders-container'>
      <RemindersList
        list={remindersList}
        addListClicked={() => setIsAddingList(!isAddingList)}
        isAddingList={isAddingList}
        createList={e => createList(e)}
        newListName={newListName}
        changeName={e => setNewListName(e.target.value)}
      />
      <Reminders
        items={reminders}
        name={id}
        addReminderClicked={() => setIsAddingReminder(!isAddingReminder)}
        isAddingReminder={isAddingReminder}
        createReminder={createReminder}
        changeName={e => setNewReminderName(e.target.value)}
        newReminderName={newReminderName}
        removeReminder={id => removeReminder(id)}
      />
    </div>
  );
};

export default RemindersPage;
