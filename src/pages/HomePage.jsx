import React from 'react'

// Components
import SearchBar from '../components/homepage/SearchBar'
import MessageSection from '../components/homepage/MessageSection'
import ProfileBar from '../components/ProfileBar'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__first'>
        <SearchBar />
        <MessageSection />
        <ProfileBar />
      </div>
      <div className='home-page__second'>
        Second section
      </div>
    </div>
  )
}

export default HomePage