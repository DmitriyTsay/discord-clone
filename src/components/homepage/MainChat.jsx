import React from 'react';

// Styles
import './MainChat.scss';

const MainChat = ({selectedDialogue}) => {
  return (
    <div className='main-chat'>
        {!selectedDialogue && 
        <div className='no-dialogue'>
            <h1>Feel free to select dialogue or channel at the left!</h1>
        </div>}
        {selectedDialogue && 
        <div className="dialogue">
            
        </div>}
    </div>
  )
}

export default MainChat