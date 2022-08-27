import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChannelCard = ({img, name, page}) => {

  const navigate = useNavigate();

  return (
    <div className='channel-card'>
        <div className='channel-card__img'>
            <img src={img} alt='channel' onClick={() => navigate(page)}></img>
        </div>
    </div>
  )
}

export default ChannelCard