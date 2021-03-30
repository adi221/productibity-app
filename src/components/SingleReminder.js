import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const SingleReminder = ({ item, removeReminder }) => {
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);
  return (
    <li
      onMouseEnter={() => setShowRemoveBtn(true)}
      onMouseLeave={() => setShowRemoveBtn(false)}
    >
      <p>{item}</p>
      {showRemoveBtn && <IoMdClose onClick={removeReminder} />}
    </li>
  );
};

export default SingleReminder;
