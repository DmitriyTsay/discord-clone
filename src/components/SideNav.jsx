import React from 'react'

// Components
import ChannelCard from './ChannelCard';

// Icons
import { FiSettings } from 'react-icons/fi';

const SideNav = ({data, selectChannel, selectedChannel}) => {

    const channels = data.channels;

  return (
    <nav className='sidenav'>
        {channels.map((channel) => {
            return (
                <ChannelCard 
                page={channel.name === 'Homepage' ? '/' : '/channel'}
                img={channel.img}
                key={channel.name}
                name={channel.name}
                handleClick={() => selectChannel(channel)}
                selected={selectedChannel.name === channel.name ? true : false}
                />
            )
        })}
        <ChannelCard 
            name='Add channel'
        />
        <div className='sidenav__settings'>
            <FiSettings />
        </div>
    </nav>
  )
}

export default SideNav