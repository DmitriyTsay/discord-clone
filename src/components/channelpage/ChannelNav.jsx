import React from 'react'

const ChannelNav = ({channel1}) => {

    const channel = {
        name: 'GamesChannel',
        users: [
            {
                name: 'Tsay Dmitriy',
                image: 'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
                online: true,
                status: 'Working'
            },
            {
                name: 'Bill Gates',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmy4xLx6IpXyhloRDttTWPp8k_0ULF3uZMFoIpLsQBQg&s',
                online: false,
                status: 'Working'
            },
            {
                name: 'Elon Musk',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsCIjp_jNXobV8zB79v5xRKMNlAHysXcOblQScU8BfQ&s',
                online: false,
                status: 'Chilling'
            },
        ],
        textChats: [
            'Welcome',
            'Work',
            'Kurilka'
        ],
        voiceChats: [
            'VoiceChat #1',
            'VoiceChat #2',
            'VoiceChat #3'
        ]
    }

  return (
    <div className='channel-nav'>
        <div className='channel-nav__category'>
            <p className='small gray bold'>Text chats</p>
            {channel.textChats.map((chat) => {
                return (
                <p className='chat'>#{chat}</p>
                )
            })}
        </div>
        <div className='channel-nav__category'>
            <p className='small gray bold'>Voice chats</p>
            {channel.voiceChats.map((chat) => {
                return (
                <p className='chat'>#{chat}</p>
                )
            })}
        </div>
    </div>
  )
}

export default ChannelNav