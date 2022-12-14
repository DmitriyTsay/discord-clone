import React from 'react';

// Icons
import {AiOutlineArrowDown, AiOutlineClose, AiFillBulb} from 'react-icons/ai';
import { ImExit, } from 'react-icons/im';
import { HiUserAdd } from 'react-icons/hi';
import { MdPrivacyTip } from 'react-icons/md';

const ChannelShortcut = ({channel1}) => {

    const [ isModalOpen, setIsModalOpen ] = React.useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevSetIsModalOpen) => !prevSetIsModalOpen);
    }

    const channel = {
        name: 'Games',
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
    <div className='channel-shortcut'>
        <div className='channel-shortcut__header'  onClick={toggleModal}>
            <span>{channel.name}</span>
            <div className='channel-shortcut__header__icon'>
                {isModalOpen ? <AiOutlineClose /> : <AiOutlineArrowDown />}
            </div>
        </div>
        <div className={`channel-shortcut__modal ${isModalOpen ? 'show' : null}`}>
            <p>About Channel <AiFillBulb /></p>
            <div className='divider'></div>
            <p>Privacy settings <MdPrivacyTip /></p>
            <div className='divider'></div>
            <p>Invite friends <HiUserAdd /></p>
            <div className='divider'></div>
            <p className='red'>Leave channel<ImExit /></p>
        </div>
    </div>
  )
}

export default ChannelShortcut