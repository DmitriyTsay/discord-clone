import React from 'react'

// Components
import ProfileBar from '../components/ProfileBar'
import UsersSection from '../components/channelpage/UsersSection'
import ChannelShortcut from '../components/channelpage/ChannelShortcut'
import ChannelNav from '../components/channelpage/ChannelNav'
import ChannelChat from '../components/channelpage/ChannelChat'


const ChannelPage = () => {
  return (
    <div className='channel-page'>
      <div className='channel-page__first'>
        <ChannelShortcut />
        <ChannelNav />
        <ProfileBar />
      </div>
      <div className='channel-page__second'>
        <ChannelChat />
      </div>
      <div className='channel-page__third'>
        <UsersSection />
      </div>
    </div>
  )
}

export default ChannelPage