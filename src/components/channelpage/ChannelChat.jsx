import React from 'react';

// Icons
import {GrAdd} from 'react-icons/gr';
import {MdAddReaction} from 'react-icons/md';

const ChannelChat = ({channel1}) => {

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
            'Welcome',
            'Work',
            'Kurilka'
        ],
        voiceChats: [
            'VoiceChat #1',
            'VoiceChat #2',
            'VoiceChat #3'
        ],
        chat: [
            {
                user: 'Tsay Dmitriy',
                message: 'Greetings!!!!!!!!!!!!!!!!!!!!!!! (check for big messages) On this page you can see my design of the test task.',
                timestamp: 'Sunday, August 28, 2022 1:51 AM'
            },
            {
                user: 'Bill Gates',
                message: 'Great Job!',
                timestamp: 'Sunday, August 28, 2022 1:52 AM'
            },
            {
                user: 'Elon Musk',
                message: 'Nah, could do much better than this.',
                timestamp: 'Sunday, August 28, 2022 1:53 AM'
            },
            {
                user: 'Tsay Dmitriy',
                message: '-_-',
                timestamp: 'Sunday, August 28, 2022 1:54 AM'
            },
        ]

    }

    const formRef = React.useRef(null);
    const textareaRef = React.useRef(null);
    const chatMainRef = React.useRef(null);

    const [ input, setInput ] = React.useState('');
    const [ chat, setChat ] = React.useState(channel.chat);

    const findUser = (userName) => {
        for (let i = 0; i < channel.users.length; i++) {
            if (channel.users[i].name === userName) {
                return channel.users[i].image;
                break;
            }
        }
    }

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            if (input) {
                setChat((prevChat) => {
                    return [
                        ...prevChat,
                        {
                            user: 'Tsay Dmitriy',
                            message: input,
                            timestamp: 'Recently'
                        }
                    ]
                });

                setInput('');
            }
        }
    }

    // Hook for text-area stretching
    React.useEffect(() => {
        const defaultTextareaHeight = '30px';
        const defaultFormHeight = '30px';

        const currentTextareaHeight = textareaRef.current.scrollHeight;

        if (currentTextareaHeight < 90) {
            textareaRef.current.style.height = currentTextareaHeight + "px";
            formRef.current.style.height = currentTextareaHeight + "px";
        } else {
            textareaRef.current.style.height = "75px";
            formRef.current.style.height = "75px";
        }

        if (!input) {
            textareaRef.current.style.height = defaultTextareaHeight;
            formRef.current.style.height = defaultFormHeight;
        }
    },[input])

    // Hook for insta scroll down with new message
    React.useEffect(() => {
        chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
    }, [chat])

  return (
    <div className='channel-chat'>
        <div className='channel-chat__header'>#Welcome</div>
        <div className='channel-chat__main' ref={chatMainRef}>
            {chat.map((message) => {
                return (
                    <div className='message'>
                        <img 
                        src={findUser(message.user)} 
                        alt='image' />
                        <p className='bold small white'>{message.user} <span className='message_timestamp gray small'>{message.timestamp}</span></p>
                        <p className='message__main white'>{message.message}</p>
                    </div>
                )
            })}
        </div>
        <div className='channel-chat__input'>
            <form ref={formRef}>
                <div className='channel-chat__input__add'>
                    <GrAdd />
                </div>
                <div className='channel-chat__input__emoji'>
                    <MdAddReaction />
                </div>
                <textarea 
                onKeyDown={(e) => handleSubmit(e)}
                ref={textareaRef}
                placeholder='Message'
                value={input}
                onChange={handleInput}
                />
            </form>
        </div>
    </div>
  )
}

export default ChannelChat