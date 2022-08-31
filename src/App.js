import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

// Components
import SideNav from './components/SideNav';

// Pages
import HomePage from './pages/HomePage';
import ChannelPage from './pages/ChannelPage';

// DummyData
import { data } from './dummydata';

const App = () => {

  const [ selectedChannel, setSelectedChannel ] = React.useState(data.channels[0]);
  const [ selectedChat, setSelectedChat ] = React.useState(null);
  const [ activeUser, setActiveUser ] = React.useState(data.activeUser);
  const [ messages, setMessages ] = React.useState(null);

  const selectChannel = (channel) => {
    setSelectedChannel(channel);

    if (channel.name === 'Homepage') {
      setSelectedChat(null);
      return;
    }

    selectChat(channel.textChats[0]);
  }

  const selectChat = (chat) => {
    setSelectedChat(chat);
    setMessages(chat.messages);
  }

  return (
    <div className='app'>
      <HashRouter>
        <SideNav data={data} selectChannel={selectChannel} selectedChannel={selectedChannel}/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route 
            exact path='/channel/' 
            element={
              <ChannelPage 
                selectedChannel={selectedChannel} 
                selectChat={selectChat} 
                selectedChat={selectedChat} 
                activeUser={activeUser}
                setMessages={setMessages}
                messages={messages}
              />
            } 
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App