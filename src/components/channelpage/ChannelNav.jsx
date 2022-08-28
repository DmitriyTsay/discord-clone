import React from 'react';

// Icons
import { BiHash, BiUserVoice, BiUserPlus } from 'react-icons/bi';

const ChannelNav = ({channel1}) => {

    const [selectedChat, setSelectedChat] = React.useState(null);

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
            {
                chatName: 'Welcome',
                unreadMessages: 0,
            },
            {
                chatName: 'Work',
                unreadMessages: 2,
            },
            {
                chatName: 'Kurilka',
                unreadMessages: 100,
            }
        ],
        voiceChats: [
            {
                chatName: 'VoiceChat #1',
                activeUsers: [],
            },
            {
                chatName: 'VoiceChat #2',
                activeUsers: [],
            },
            {
                chatName: 'VoiceChat #3',
                activeUsers: [],
            }
        ],
    }

    const selectChat = (chat) => {
        setSelectedChat(chat);
    }

  return (
    <div className='channel-nav'>
        <div className='channel-nav__category'>
            <p className='gray chat-category'>Text chats</p>
            {channel.textChats.map((chat) => {
                return (
                <p className={`chat w600 white ${chat.chatName === selectedChat ? 'chat__selected': ''}`} onClick={() => {selectChat(chat.chatName)}}>
                    <BiHash /> 
                    {chat.chatName}
                    {chat.unreadMessages > 0 && <div className='chat__unread'>
                        {chat.unreadMessages > 99 ? "99+" : `${chat.unreadMessages}`}
                    </div>}
                    <div className='chat__add'>
                        <BiUserPlus />
                    </div>
                </p>
                )
            })}
        </div>
        <div className='channel-nav__category'>
            <p className='gray chat-category'>Voice chats</p>
            {channel.voiceChats.map((chat) => {
                return (
                <p className={`chat w600 white ${chat.chatName === selectedChat ? 'chat__selected': ''}`}  onClick={() => {selectChat(chat.chatName)}}>
                    <BiUserVoice /> 
                    {chat.chatName}
                    <div className='chat__add'>
                        <BiUserPlus />
                    </div>
                </p>
                )
            })}
        </div>
    </div>
  )
}

export default ChannelNav