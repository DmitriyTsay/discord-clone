import React from 'react'
import UserBar from '../UserBar'

const UsersSection = () => {

    const [findInput, setFindInput] = React.useState('');

    const users = [
        {
            name: 'Tsay Dmitriy',
            image: 'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
            online: true,
            status: 'Working'
        },
        {
            name: 'Bill Gates',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmy4xLx6IpXyhloRDttTWPp8k_0ULF3uZMFoIpLsQBQg&s',
            online: true,
            status: 'Working'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
        {
            name: 'Elon Musk',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
            online: false,
            status: 'Chilling'
        },
    ]

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
                        image={user.image}
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
                        image={user.image}
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