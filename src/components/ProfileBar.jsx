import React from 'react'

import { 
  MdOutlineMicNone, MdOutlineMicOff, 
  MdOutlineHeadsetMic, MdOutlineHeadsetOff 
} from 'react-icons/md';

const ProfileBar = () => {

  const [ isMicOn, setIsMicOn] = React.useState(true);
  const [ isHeadSetOn, setIsHeadSetOn] = React.useState(true);

  const activeUser = {
    name: 'Tsay Dmitriy',
    image: 'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
  }

  const toggleMic = () => {
    if (isMicOn && !isHeadSetOn) {
      return;
    } else if (!isMicOn && !isHeadSetOn) {
      return;
    }

    setIsMicOn((prevIsMicOn) => !prevIsMicOn);
  }

  const toggleHeadset = () => {
    if (isMicOn && isHeadSetOn) {
      setIsHeadSetOn(false);
      setIsMicOn(false);
    } else if (!isMicOn && !isHeadSetOn) {
      setIsHeadSetOn(true);
      setIsMicOn(true);
    } else if (!isMicOn && isHeadSetOn) {
      setIsHeadSetOn(false);
    }
  }

  return (
    <div className='profile-bar'>
        <div className='profile-bar__credentials'>
            <div className='profile-bar__credentials__image'>
                <img src={activeUser.image} alt="profile" />
            </div>
            <p className='bold'>{activeUser.name}</p>
            <p className='credentials__id'>#1356</p>
        </div>
        <div className='profile-bar__mic' onClick={toggleMic}>
          {isMicOn ? <MdOutlineMicNone /> : <MdOutlineMicOff />}
        </div>
        <div className='profile-bar__headset' onClick={toggleHeadset}>
          {isHeadSetOn ? <MdOutlineHeadsetMic /> : <MdOutlineHeadsetOff />}
        </div>
    </div>
  )
}

export default ProfileBar