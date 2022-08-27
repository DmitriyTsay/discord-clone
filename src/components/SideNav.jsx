import React from 'react'
import ChannelCard from './ChannelCard';

import {data} from '../dummydata';

const SideNav = () => {
  return (
    <nav className='sidenav'>
        <ChannelCard 
            img='https://media-exp1.licdn.com/dms/image/C4D0BAQH6SWrsil3_Xw/company-logo_200_200/0/1638984902150?e=1669852800&v=beta&t=UE9HGoRib_ybtcEPI7rTnt7ILqhH75sS45NktKvTETw'
            name='HomePage'
            page='/'
        />
        <div class='sidenav__divider'></div>
        {Object.values(data.channels).map((channel) => {
            return (
                <ChannelCard 
                img={channel.img ? channel.img : './images/noimage.png'}
                name={JSON.stringify(channel)}
                key={JSON.stringify(channel)}
                page='/channel'
                />
            )
        })}

        <ChannelCard 
            img='https://cdn-icons-png.flaticon.com/512/117/117885.png'
        
        />
    </nav>
  )
}

export default SideNav