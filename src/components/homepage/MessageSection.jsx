import React from 'react'

// Styles
import './MessageSection.scss';

// Components
import UserBar from '../UserBar';

// Icons
import { FaUserFriends } from 'react-icons/fa';


const MessageSection = ({friends}) => {
  return (
    <div className='message-section'>
      <div className="friends-bar">
        <FaUserFriends /> Friends
      </div>
      <p>Direct Messages</p>
      {friends?.map((friend) => {
        return (
          <UserBar 
            name={friend.name}
            status={friend.status}
            image={friend.avatar}
            online={friend.online}
          />
        )
      })}
    </div>
  )
}

export default MessageSection