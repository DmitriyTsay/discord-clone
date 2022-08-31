import React from 'react'

// Components
import ProfileBar from '../components/ProfileBar'
import UsersSection from '../components/channelpage/UsersSection'
import ChannelShortcut from '../components/channelpage/ChannelShortcut'
import ChannelNav from '../components/channelpage/ChannelNav'
import ChannelChat from '../components/channelpage/ChannelChat'


const ChannelPage = ({selectedChannel, selectChat, selectedChat, activeUser, messages, setMessages}) => {
  return (
    <div className='channel-page'>
      <div className='channel-page__first'>
        <ChannelShortcut channel={selectedChannel}/>
        <ChannelNav channel={selectedChannel} selectChat={selectChat} selectedChat={selectedChat}/>
        <ProfileBar channel={selectedChannel} activeUser={activeUser}/>
      </div>
      <div className='channel-page__second'>
        <ChannelChat channel={selectedChannel} selectedChat={selectedChat} activeUser={activeUser} messages={messages} setMessages={setMessages}/>
      </div>
      <div className='channel-page__third'>
        <UsersSection channel={selectedChannel}/>
      </div>
    </div>
  )
}

export default ChannelPage