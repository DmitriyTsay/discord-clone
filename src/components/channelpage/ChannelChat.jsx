import React from 'react';

// Icons
import { GrAdd } from 'react-icons/gr';
import { MdAddReaction } from 'react-icons/md';
import { BiUserPin, BiPin } from 'react-icons/bi';
import { ImInfo } from 'react-icons/im'

const ChannelChat = ({channel, selectedChat, activeUser, messages, setMessages}) => {

    const formRef = React.useRef(null);
    const textareaRef = React.useRef(null);
    const chatMainRef = React.useRef(null);

    const [ input, setInput ] = React.useState('');

    const findUser = (userName) => {
        for (let i = 0; i < channel.users.length; i++) {
            if (channel.users[i].name === userName) {
                return channel.users[i].avatar;
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
                console.log(`submitted`);
                setMessages((prevMessages) => {
                    return [
                        ...prevMessages,
                        {
                            user: activeUser.name,
                            message: input,
                            timestamp: 'Recently',
                        }
                    ]
                })
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
            chatMainRef.current.style.height = `calc(100vh - 36px - ${currentTextareaHeight + 20 + 'px'})`;
            chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
        } else {
            textareaRef.current.style.height = "75px";
            formRef.current.style.height = "75px";
            chatMainRef.current.style.height = `calc(100vh - 36px - 95px)`;
            chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
        }

        if (!input) {
            textareaRef.current.style.height = defaultTextareaHeight;
            formRef.current.style.height = defaultFormHeight;
            chatMainRef.current.style.height = `calc(100vh - 36px - 50px)`;
            chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
        }
    },[input])

    // Hook for insta scroll down with new message
    React.useEffect(() => {
        chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
    }, [messages])

  return (
    <div className='channel-chat'>
        <div className='channel-chat__header'>
            <div className='gray info'><ImInfo /></div>
            <span># Welcome</span>
            <p className='gray users-amount'><BiUserPin />{channel.users.length}</p>
            <p className='gray pin-amount'><BiPin />0</p>
            <div className='channel-chat__header__modal'>
                <p>Description of chat</p>
            </div>
            <div className='pin-amount__modal'>
                <p>Pinned messages</p>
            </div>
        </div>
        <div className='channel-chat__main' ref={chatMainRef}>
            {messages?.map((message) => {
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