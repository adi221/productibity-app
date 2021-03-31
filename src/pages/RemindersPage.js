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
        { name: 'Clean the house', id: 'home0' },
        { name: 'Review Coding', id: 'work0' },
        { name: 'Do some sports', id: 'work1' },
        { name: 'Cook food', id: 'home1' },
      ],
      Work: [
        { name: 'Review Coding', id: 'work0' },
        { name: 'Do some sports', id: 'work1' },
      ],
      Home: [
        { name: 'Clean the house', id: 'home0' },
        { name: 'Cook food', id: 'home1' },
      ],
    };
  }
};

localStorage.clear();

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
  let allReminders = Object.values(lists)
    .slice(1)
    .reduce((acc, reminderList) => acc.concat(reminderList), []);
  lists['All'] = allReminders;
  // localStorage.clear();

  const createList = e => {
    if (newListName.trim() === '') return;
    e.preventDefault();
    setLists({ ...lists, [newListName]: [] });
    history.push(`/${newListName}`);
    setNewListName('');
    setIsAddingList(false);
  };

  const createReminder = e => {
    if (newReminderName.trim() === '') return;
    e.preventDefault();
    setLists({
      ...lists,
      [id]: [
        ...lists[id],
        { name: newReminderName, id: `${id.toLowerCase()}${lists[id].length}` },
      ],
    });
    setNewReminderName('');
    setIsAddingReminder(false);
  };

  const removeReminder = reminderId => {
    let reminderList = reminderId.replace(/[0-9]/g, '');
    reminderList = reminderList.charAt(0).toUpperCase() + reminderList.slice(1);
    let newList = lists[reminderList].filter(
      reminder => reminder.id !== reminderId
    );
    setLists({ ...lists, [reminderList]: newList });
  };

  const deleteList = () => {
    delete lists[id];
    history.push('/');
  };

  useEffect(() => {
    lists['All'] = allReminders;
    // localStorage.setItem('reminders', JSON.stringify(lists));
    //eslint-disable-next-line
  }, [lists]);

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
        deleteList={deleteList}
      />
    </div>
  );
};

export default RemindersPage;
