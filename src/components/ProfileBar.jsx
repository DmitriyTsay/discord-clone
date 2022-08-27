import React from 'react'

const ProfileBar = () => {
  return (
    <div className='profile-bar'>
        <div className='profile-bar__credentials'>
            <div className='profile-bar__credentials__image'>
                <img src='/images/noimage.png' alt="profile" />
            </div>
            <p className='bold'>Tsay Dmitriy</p>
            <p className='credentials__id'>#1356</p>
        </div>
    </div>
  )
}

export default ProfileBar