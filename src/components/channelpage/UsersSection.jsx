import React from 'react'
import UserBar from '../UserBar'

const UsersSection = ({channel}) => {

    const [findInput, setFindInput] = React.useState('');

    const users = channel.users;

    const findUser = (event) => {
        setFindInput(event.target.value)
    }

  return (
    <div className='users-section'>
        <div className='users-section__scroll'>
            <div className='users-section__header'>
                <input 
                type='text'
                value={findInput}
                onChange={(e) => findUser(e)}
                placeholder='Find user'
                />
            </div>
        </div>
        <div className='users-section__category'>
            <p className='small gray bold'>Online</p>
            {users.map((user) => {
                if (user.online) {
                    return (
                    <UserBar 
                        name={user.name}
                        image={user.avatar}
                        status={user.status}
                    />
                    )
                }
            })}
        </div>
        <div className='users-section__category'>
            <p className='small gray bold'>Offline</p>
            {users.map((user) => {
                if (!user.online) {
                    return (
                    <UserBar 
                        name={user.name}
                        image={user.avatar}
                        status={user.status}
                    />
                    )
                }
            })}
        </div>
    </div>
  )
}

export default UsersSection