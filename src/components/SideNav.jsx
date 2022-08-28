import React from 'react'

// Components
import ChannelCard from './ChannelCard';

// Icons
import { FiSettings } from 'react-icons/fi';
import { IoAddOutline } from 'react-icons/io';

const SideNav = () => {

    const data = {
        channels: [
            {
                channelName: 'Homepage',
                image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQH6SWrsil3_Xw/company-logo_200_200/0/1638984902150?e=1669852800&v=beta&t=UE9HGoRib_ybtcEPI7rTnt7ILqhH75sS45NktKvTETw',
            },
            {
                channelName: 'Games',
                image: 'https://www.icivics.org/sites/default/files/2021Product_game.png',
            },
            {
                channelName: 'Video',
                image: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-video-icon-image_1128393.jpg',
            },
            {
                channelName: 'Cats',
                image: 'https://i.pinimg.com/736x/08/f0/ec/08f0ec9f38f376d384d9ddafd3e574d2.jpg',
            },
        ]
    }

    const [ selectedChannel, setSelectedChannel ] = React.useState('');

    const selectChannel = (channelName) => {
        setSelectedChannel(channelName);
    }

  return (
    <nav className='sidenav'>
        {data.channels.map((channel) => {
            return (
                <ChannelCard 
                page={channel.channelName === 'Homepage' ? '/' : '/channel'}
                img={channel.image}
                key={channel.channelName}
                name={channel.channelName}
                handleClick={() => selectChannel(channel.channelName)}
                selected={selectedChannel === channel.channelName ? true : false}
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