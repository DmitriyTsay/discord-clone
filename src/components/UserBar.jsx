import React from 'react'

// Styles
import './UserBar.scss';

const UserBar = ({name, image, online, status}) => {
  return (
    <div className='user-bar'>
        <div className='user-bar__credentials'>
            <div className='user-bar__credentials__image'>
                <img src={image} alt="user"></img>
                <div className={`online ${online ? 'yes' : 'no'}`}></div>
            </div>
            <p>{name}</p>
            <p className='status small bold gray'>{status}</p>
        </div>
    </div>
  )
}

export default UserBar