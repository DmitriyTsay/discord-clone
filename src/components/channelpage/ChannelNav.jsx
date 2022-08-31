import React from 'react';

// Icons
import { BiHash, BiUserVoice, BiUserPlus } from 'react-icons/bi';

const ChannelNav = ({channel, selectChat, selectedChat}) => {

  return (
    <div className='channel-nav'>
        <div className='channel-nav__category'>
            <p className='gray chat-category'>Text chats</p>
            {channel.textChats.map((chat) => {
                return (
                <p className={`chat w600 white ${chat.chatName === selectedChat.chatName ? 'chat__selected': ''}`} onClick={() => {selectChat(chat)}}>
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
                <p className={`chat w600 white ${chat.chatName === selectedChat.chatName ? 'chat__selected': ''}`}  onClick={() => {selectChat(chat)}}>
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