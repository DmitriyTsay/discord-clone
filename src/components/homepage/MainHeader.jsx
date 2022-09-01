import React from 'react';

// Styles
import './MainHeader.scss';

// Icons
import { FaUserFriends } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';

const MainHeader = () => {
  return (
    <div className='main-header'>
        <p><FaUserFriends /> Friends</p>
        <span>Online</span>
        <span>All</span>
        <span>Pending</span>
        <AiFillQuestionCircle />
    </div>
  )
}

export default MainHeader