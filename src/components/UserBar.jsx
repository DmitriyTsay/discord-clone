import React from 'react'

const UserBar = ({name, image, online, status}) => {
  return (
    <div className='user-bar'>
        <div className='user-bar__credentials'>
            <div className='user-bar__credentials__image'>
                <img src={image} alt="user" />
            </div>
            <p>{name}</p>
            <p className='status small bold'>{status}</p>
        </div>
    </div>
  )
}

export default UserBar