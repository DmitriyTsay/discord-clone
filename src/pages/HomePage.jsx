import React from 'react'

// Styles
import './HomePage.scss';

// Components
import SearchBar from '../components/homepage/SearchBar'
import MessageSection from '../components/homepage/MessageSection'
import ProfileBar from '../components/ProfileBar'
import MainHeader from '../components/homepage/MainHeader'
import MainChat from '../components/homepage/MainChat'

const HomePage = ({friends, selectedDialogue}) => {
  return (
    <div className='home-page'>
      <div className='home-page__first'>
        <SearchBar />
        <MessageSection friends={friends}/>
        <ProfileBar />
      </div>
      <div className='home-page__second'>
        <MainHeader />
        <MainChat />
      </div>
    </div>
  )
}

export default HomePage