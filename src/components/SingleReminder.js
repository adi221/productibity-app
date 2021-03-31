import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const SingleReminder = ({ item, removeReminder, name }) => {
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  let categoryName = item.id.replace(/[0-9]/g, '');
  categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <li
      onMouseEnter={() => setShowRemoveBtn(true)}
      onMouseLeave={() => setShowRemoveBtn(false)}
    >
      <p>
        {item.name}
        {(name === 'All' || name === undefined) && (
          <span className='category-reminder'>{categoryName}</span>
        )}
      </p>
      {showRemoveBtn && <IoMdClose onClick={removeReminder} />}
    </li>
  );
};

export default SingleReminder;
